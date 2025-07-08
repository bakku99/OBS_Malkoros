const { MarkdownView, Notice } = require('obsidian');

module.exports = async ({ app, variables, settings }) => {
    const variableName = settings?.variable || 'ai_output';
    const text = variables?.[variableName];
    if (!text) {
        new Notice(`QuickAdd variable "${variableName}" was empty or undefined.`);
        return;
    }
    const view = app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) {
        new Notice('No active markdown view to insert text.');
        return;
    }
    view.editor.replaceSelection(text);
};