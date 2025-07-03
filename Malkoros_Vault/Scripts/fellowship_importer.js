module.exports = async (tp) => {
    const vault = tp.app.vault;
    const fellowshipDir = "Lore/Fellowships";
    const sourceDirs = [
        "Lore/Greater_Deities",
        "Lore/Lesser_Deities",
        "Lore/Elemental_Deities",
        "Lore/Lower_Planes_Deities"
    ];

    // Build a map of fellowship file objects
    const fellowshipFiles = {};
    for (const file of vault.getMarkdownFiles()) {
        if (file.path.startsWith(fellowshipDir)) {
            const name = file.basename.replace(/_/g, " ");
            fellowshipFiles[name] = file;
            // Ensure each file starts with "# Title"
            let text = await vault.read(file);
            if (!text.startsWith("# " + name)) {
                text = `# ${name}\n\n` + text.trim();
                await vault.modify(file, text);
            }
        }
    }

    // Scan deities for matching sections and append the first paragraph
    for (const dir of sourceDirs) {
        for (const file of vault.getMarkdownFiles()) {
            if (file.path.startsWith(dir)) {
                const contents = await vault.read(file);
                for (const [title, ffile] of Object.entries(fellowshipFiles)) {
                    const pattern = new RegExp(`^### ${title}\\n([^#]+)`, "m");
                    const match = contents.match(pattern);
                    if (match) {
                        const para = match[1].trim();
                        const current = await vault.read(ffile);
                        if (!current.includes(para)) {
                            await vault.append(ffile, `\n${para}\n`);
                        }
                    }
                }
            }
        }
    }
};
