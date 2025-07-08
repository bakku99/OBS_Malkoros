module.exports = async (tp) => {
  const vault = tp.app.vault;
  const deityDirs = [
    "Lore/Greater_Deities",
    "Lore/Lesser_Deities",
    "Lore/Lower_Planes_Deities",
    "Lore/Elemental_Deities",
  ];
  const fellowshipBase = "Lore/Fellowships";

  const deityFiles = vault.getMarkdownFiles().filter(f =>
    deityDirs.some(dir => f.path.startsWith(dir))
  );

  for (const file of deityFiles) {
    const content = await vault.read(file);
    const deityNameMatch = content.match(/^#\s+([^\n]+)/m);
    if (!deityNameMatch) continue;
    const deityName = deityNameMatch[1].trim();

    const fellowshipSectionMatch = content.split(/\n##\s+Fellowship/)[1];
    if (!fellowshipSectionMatch) continue;

    const sections = fellowshipSectionMatch
      .split(/\n(?=###\s+)/)
      .slice(1);
    for (const section of sections) {
      const lines = section.split(/\n/);
      const paragraph = lines.slice(1).join("\n");
      const linkMatch = paragraph.match(/\[\[([^|\]]+)/);
      if (!linkMatch) continue;
      let relPath = linkMatch[1];
      if (!relPath.startsWith("Fellowships/")) {
        relPath = `Fellowships/${relPath}`;
      }
      if (!relPath.endsWith(".md")) relPath += ".md";
      const fullPath = `Lore/${relPath}`;
      const ffile = vault.getAbstractFileByPath(fullPath);
      if (!ffile) continue;
      let fcontent = await vault.read(ffile);
      const backlink = `[[${deityName}]]`;
      if (!fcontent.includes(backlink)) {
        if (!fcontent.endsWith("\n")) fcontent += "\n";
        fcontent += `${backlink}\n`;
        await vault.modify(ffile, fcontent);
      }
    }
  }
};