# Text Generator Templates

This folder holds custom templates used by the **Text Generator** plugin. The `FellowshipExpander.md` template expands a selected fellowship description using lore from every deity file as context.

### Usage
1. Highlight the introductory paragraph of a fellowship note (for example, in `Lore/Fellowships/Accorded_Eyes.md`).
2. Run the **Templates: Generate & Insert** command and choose `FellowshipExpander`.
3. The plugin loads each listed deity note so its text and links are available as context. The selected text (`{{tg_selection}}`) is sent to the model with the prompt to produce additional paragraphs in the same tone.
The **context** section of `FellowshipExpander.md` enumerates every deity file, for example:
```
context:
  - Lore/Greater_Deities/Atotz.md
  - Lore/Greater_Deities/Hostus.md
  ...
```

Listing each file ensures the template loads all relevant lore from your vault.