module.exports = async (tp) => {
    const vault = tp.app.vault;
    const fellowshipDir = "Lore/Fellowships";
    const sourceDirs = [
        "Lore/Greater_Deities",
        "Lore/Lesser_Deities",
        "Lore/Elemental_Deities",
        "Lore/Lower_Planes_Deities"
    ];

    // Map fellowship names to file objects
    const fellowshipFiles = {};
    for (const file of vault.getMarkdownFiles()) {
        if (file.path.startsWith(fellowshipDir)) {
            const name = file.basename.replace(/_/g, " ");
            fellowshipFiles[name] = file;
            let text = await vault.read(file);
            if (!text.startsWith(`# ${name}`)) {
                text = `# ${name}\n\n` + text.trim();
                await vault.modify(file, text);
            }
        }
    }

    // Helper to strip link lines
    function cleanParagraph(txt) {
        return txt
            .split(/\r?\n/)
            .filter(line => line.trim() && !line.trim().startsWith("[["))
            .join("\n");
    }

    // Process each deity file
    for (const file of vault.getMarkdownFiles()) {
        if (!sourceDirs.some(dir => file.path.startsWith(dir))) continue;
        const contents = await vault.read(file);
        const regex = /^###\s+([^\n]+)\n([\s\S]*?)(?=\n### |\n## |\n# |$)/gm;
        let match;
        while ((match = regex.exec(contents)) !== null) {
            const title = match[1].trim();
            const paragraph = cleanParagraph(match[2]).trim();
            if (paragraph && fellowshipFiles[title]) {
                const ffile = fellowshipFiles[title];
                const current = await vault.read(ffile);
                if (!current.includes(paragraph)) {
                    await vault.append(ffile, `\n${paragraph}\n`);
                }
            }
        }
    }
};