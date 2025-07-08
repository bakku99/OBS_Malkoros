# Text Generator Scripts
Please be sure to note that file path: Malkoros_Vault/QuickaddScripts holds scripts for use with the quickadd plugin. File path: Malkoros_Vault/TemplaterScripts holds the scripts for all other plugins, including textgenerator.
Templates for use with the textgenerator plugin are in file path: Malkoros_Vault/textgenerator/templates. Templates for use with all other plugins are in file path: Malkoros_Vault/Templates.

## FellowshipExpander
`FellowshipExpander.md` expands a selected fellowship description while drawing on the entire Malkoros lore library so every addition matches the established voice.

The context list inside `FellowshipExpander.md` is generated automatically. You can update it in two ways:

```
node TemplaterScripts/generate_lore_context.js
```

Run the command above from a terminal, **or** invoke the script through Obsidian’s Templater plugin by selecting **Templater: Run User Script** and choosing `generate_lore_context`.
Use either method whenever you add new lore notes so the template includes them all.

Before inserting new text, refresh the context list:
1. Open the command palette and run **Templater: Run User Script**.
2. Select `generate_lore_context` to update `FellowshipExpander.md`.

### Usage
1. Open a fellowship note, e.g. `Lore/Fellowships/Verdant_Core.md`.
2. Highlight its introductory paragraph.
3. Run **Templates: Generate & Insert** and pick `FellowshipExpander`.
4. The plugin loads every file in `Lore/` plus `Lore_Index.md` and uses them as context.
5. The inserted text will expand the highlighted fellowship in the same tone and style as the rest of the lore.