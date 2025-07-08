module.exports = async (tp) => {
	const vault = tp.app.vault;
	const fellowshipDir = "Lore/Fellowships";
	const sourceDirs = [
	"Lore/Greater_Deities",
	"Lore/Lesser_Deities",
	"Lore/Elemental_Deities",
	"Lore/Lower_Planes_Deities"
	];

	// Normalize helper to compare names regardless of punctuation/case
	const normalize = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

	// Map fellowship name -> {file, displayName}
	const fellowshipFiles = {};
	for (const file of vault.getMarkdownFiles()) {
		if (file.path.startsWith(fellowshipDir) && file.basename !== "Fellowships") {
			const displayName = file.basename.replace(/_/g, " ");
			fellowshipFiles[normalize(displayName)] = { file, displayName };
			// Ensure each file starts with "# Title"
			let text = await vault.read(file);
			if (!text.startsWith(`# ${displayName}`)) {
				text = `# ${displayName}\n\n` + text.trim();
				await vault.modify(file, text);
			}
		}
	}

	// Scan all deity files for matching fellowship sections
	const headerRegex = /^###\s+(.*)\n([\s\S]*?)(?=\n###|\n##|\n#|$)/gm;
	for (const file of vault.getMarkdownFiles()) {
		if (!sourceDirs.some((d) => file.path.startsWith(d))) continue;
		const contents = await vault.read(file);
		let match;
		while ((match = headerRegex.exec(contents)) !== null) {
			const headerName = match[1].trim();
			const key = normalize(headerName);
			const fellowship = fellowshipFiles[key];
			if (!fellowship) continue;

			// Remove any wiki links from the captured text
			const para = match[2]
				.split("\n")
				.filter((line) => !/\[\[.*\]\]/.test(line))
				.join("\n")
				.trim();
			if (para) {
				const current = await vault.read(fellowship.file);
				if (!current.includes(para)) {
					await vault.append(fellowship.file, `\n${para}\n`);
				}
			}
		}
	}
};