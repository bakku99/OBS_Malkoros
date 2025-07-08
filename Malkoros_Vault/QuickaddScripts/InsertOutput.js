const { MarkdownView, Notice } = require('obsidian');

module.exports = async ({ app, variables, settings }) => {
    const variableName = settings?.variable || 'ai_output';
    const text = variables?.[variableName] || '';
    const view = app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) {
        new Notice('No active markdown view to insert text.');
        return;
    }
    view.editor.replaceSelection(text);
};