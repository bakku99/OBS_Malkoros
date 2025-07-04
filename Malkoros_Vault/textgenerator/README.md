# Text Generator Templates

This folder holds custom templates used by the **Text Generator** plugin. `FellowshipExpander.md` expands a selected fellowship description while drawing on the entire Malkoros lore library so every addition matches the established voice.

### Usage
1. Highlight the introductory paragraph of a fellowship note (for example, in `Lore/Fellowships/Accorded_Eyes.md`).
2. Run the **Templates: Generate & Insert** command and choose `FellowshipExpander`.
3. The template loads all notes listed under the `context` key. This includes `Lore_Index.md`, every markdown file in the `Lore` folder, and every file inside `Lore/Greater_Deities`, `Lore/Lesser_Deities`, `Lore/Elemental_Deities`, and `Lore/Lower_Planes_Deities`. The selected text (`{{tg_selection}}`) is then passed to the model.

The **context** section of `FellowshipExpander.md` explicitly enumerates each path, ensuring the model sees all relevant worldbuilding. Generated text will therefore retain Malkoros's tone, themes, and style.