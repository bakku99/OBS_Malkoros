# Text Generator Templates

This folder holds custom templates used by the **Text Generator** plugin. `FellowshipExpander.md` expands a selected fellowship description while drawing on the entire Malkoros lore library so every addition matches the established voice.

The context list inside `FellowshipExpander.md` is generated automatically by running:

```
node Scripts/generate_lore_context.js
```

Run this script whenever you add new lore notes so the template includes them all.

### Usage
1. Open a fellowship note, e.g. `Lore/Fellowships/Verdant_Core.md`.
2. Highlight its introductory paragraph.
3. Run **Templates: Generate & Insert** and pick `FellowshipExpander`.
4. The plugin loads every file in `Lore/` plus `Lore_Index.md` and uses them as context.
5. The inserted text will expand the highlighted fellowship in the same tone and style as the rest of the lore.