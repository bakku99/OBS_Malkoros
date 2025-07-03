---
id: fellowship-expander
provider: OpenAI Chat (Langchain)
model: gpt-4.1-mini
context:
  # Greater Deities
  - Lore/Greater_Deities/Atotz.md
  - Lore/Greater_Deities/Hostus.md
  - Lore/Greater_Deities/Ineas.md
  - Lore/Greater_Deities/Othys.md
  - Lore/Greater_Deities/Solanis.md
  - Lore/Greater_Deities/Therassor.md
  - Lore/Greater_Deities/Uztix.md
  # Lesser Deities
  - Lore/Lesser_Deities/Kaelis.md
  - Lore/Lesser_Deities/Lunessa.md
  - Lore/Lesser_Deities/Seramara.md
  - Lore/Lesser_Deities/Tahrun.md
  - Lore/Lesser_Deities/Vaelreth.md
  - Lore/Lesser_Deities/Vandryl.md
  - Lore/Lesser_Deities/Xexas.md
  # Elemental Deities
  - Lore/Elemental_Deities/Eirsyr.md
  - Lore/Elemental_Deities/Myrradyn.md
  - Lore/Elemental_Deities/Nysthariel.md
  - Lore/Elemental_Deities/Pyrius.md
  - Lore/Elemental_Deities/Thavax.md
  - Lore/Elemental_Deities/Zephrayl.md
  # Lower Planes Deities
  - Lore/Lower_Planes_Deities/Azhadûn.md
  - Lore/Lower_Planes_Deities/Ulvaarak.md
prompt: |
  Use the lore contained in the context files to inspire and expand upon the selected fellowship description. 
  Emulate the style and mood found across the deity notes and their references. 
  Write two or three additional paragraphs that build on the excerpt while staying consistent with Malkoros themes.
---

{{tg_selection}}