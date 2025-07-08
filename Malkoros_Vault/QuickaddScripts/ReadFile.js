const { Notice } = require('obsidian');

module.exports = async ({ app, settings }) => {
    const filePath = settings?.filePath;
    if (!filePath) {
        new Notice('No file path provided to ReadFile script.');
        return '';
    }
    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file) {
        new Notice(`File not found: ${filePath}`);
        return '';
    }
    return await app.vault.read(file);
};