---
id: fellowship-expander
provider: OpenAI Chat (Langchain)
model: gpt-4.1
context:
  - Lore_Index.md
  - Lore\Arcane_Circle_of_Enlightment.md
  - Lore\Elemental_Deities.md
  - Lore\Elemental_Deities\Eirsyr.md
  - Lore\Elemental_Deities\Myrradyn.md
  - Lore\Elemental_Deities\Nysthariel.md
  - Lore\Elemental_Deities\Pyrius.md
  - Lore\Elemental_Deities\Thavax.md
  - Lore\Elemental_Deities\Zephrayl.md
  - Lore\Fellowships.md
  - Lore\Fellowships\Accorded_Eyes.md
  - Lore\Fellowships\Ashen_Circle.md
  - Lore\Fellowships\Attendants_of_the_Rapture.md
  - Lore\Fellowships\Bladed_Veil.md
  - Lore\Fellowships\Burning_Sons.md
  - Lore\Fellowships\Children_of_Shard-Flesh.md
  - Lore\Fellowships\Children_of_the_Second_Tongue.md
  - Lore\Fellowships\Cinderscribes.md
  - Lore\Fellowships\Circle_of_the_Folded_Veil.md
  - Lore\Fellowships\Cloudchasers.md
  - Lore\Fellowships\Dancers_of_the_Oak.md
  - Lore\Fellowships\Dark_Hand.md
  - Lore\Fellowships\Dawnbringers.md
  - Lore\Fellowships\Dragons_of_Smoke.md
  - Lore\Fellowships\Duskborn_Choir.md
  - Lore\Fellowships\Echobinders.md
  - Lore\Fellowships\Echoes_of_Lunessa.md
  - Lore\Fellowships\Emberwilds.md
  - Lore\Fellowships\Eyes_of_Creation.md
  - Lore\Fellowships\Eyes_of_the_Blazing_Sun.md
  - Lore\Fellowships\Fractaline_Circle.md
  - Lore\Fellowships\Ghardankuldar_Stalwart_Warriors.md
  - Lore\Fellowships\Glacient_Wardens.md
  - Lore\Fellowships\Gorehowlers.md
  - Lore\Fellowships\Governors_of_Battle.md
  - Lore\Fellowships\Inkborn_Choir.md
  - Lore\Fellowships\Keepers_of_the_Brand.md
  - Lore\Fellowships\Knights_of_Ainarutha.md
  - Lore\Fellowships\Lachrymists.md
  - Lore\Fellowships\Laughing_Maidens.md
  - Lore\Fellowships\Lovers_of_Fortune.md
  - Lore\Fellowships\Maskbearers.md
  - Lore\Fellowships\Maws_of_the_Thousand.md
  - Lore\Fellowships\Merciful_Hands.md
  - Lore\Fellowships\Moonlit_Striders.md
  - Lore\Fellowships\Oracles_of_Oblivion.md
  - Lore\Fellowships\Order_of_the_Crimson_Veil.md
  - Lore\Fellowships\Order_of_the_Pale_Gift.md
  - Lore\Fellowships\Path_of_Adepts.md
  - Lore\Fellowships\Path_of_Ash.md
  - Lore\Fellowships\Path_of_Beasts.md
  - Lore\Fellowships\Path_of_Dynasty.md
  - Lore\Fellowships\Riders_of_the_Dark_Tide.md
  - Lore\Fellowships\Scorchbearers.md
  - Lore\Fellowships\Seramaras_Thorn.md
  - Lore\Fellowships\Sisters_of_Stillwater.md
  - Lore\Fellowships\Society_of_Luminaries.md
  - Lore\Fellowships\Spinning_Stars.md
  - Lore\Fellowships\Stagblood_Pact.md
  - Lore\Fellowships\Stonewatchers.md
  - Lore\Fellowships\Storm_Heralds.md
  - Lore\Fellowships\The_Ashen_Conclave.md
  - Lore\Fellowships\The_Chainbreakers.md
  - Lore\Fellowships\The_Chainforged.md
  - Lore\Fellowships\The_Deepbound.md
  - Lore\Fellowships\The_Drowned_Eye.md
  - Lore\Fellowships\The_Hollow_Remain.md
  - Lore\Fellowships\The_Loomwalkers.md
  - Lore\Fellowships\The_Order_of_the_Final_Clause.md
  - Lore\Fellowships\The_Unforgotten.md
  - Lore\Fellowships\The_Whispering_Quill.md
  - Lore\Fellowships\The_Whisperwing.md
  - Lore\Fellowships\Tidecallers.md
  - Lore\Fellowships\Veilbound.md
  - Lore\Fellowships\Verdant_Core.md
  - Lore\Fellowships\Walkers_of_the_Serpentine_Labyrinth.md
  - Lore\Fellowships\Warders_of_the_Gate.md
  - Lore\Fellowships\Witchlings_of_the_Night.md
  - Lore\Genesis.md
  - Lore\Geography.md
  - Lore\Geopolotitical_info.md
  - Lore\Gods.md
  - Lore\Granted_Powers.md
  - Lore\Greater_Deities.md
  - Lore\Greater_Deities\Atotz.md
  - Lore\Greater_Deities\Hostus.md
  - Lore\Greater_Deities\Ineas.md
  - Lore\Greater_Deities\Othys.md
  - Lore\Greater_Deities\Solanis.md
  - Lore\Greater_Deities\Therassor.md
  - Lore\Greater_Deities\Uztix.md
  - Lore\Lesser_Deities.md
  - Lore\Lesser_Deities\Kaelis.md
  - Lore\Lesser_Deities\Lunessa.md
  - Lore\Lesser_Deities\Seramara.md
  - Lore\Lesser_Deities\Tahrun.md
  - Lore\Lesser_Deities\Vaelreth.md
  - Lore\Lesser_Deities\Vandryl.md
  - Lore\Lesser_Deities\Xexas.md
  - Lore\Lore_Summary.md
  - Lore\Lower_Planes_Deities.md
  - Lore\Lower_Planes_Deities\Azhadûn.md
  - Lore\Lower_Planes_Deities\Ulvaarak.md
  - Lore\Malkoros_Calendar.md
  - Lore\Pantheon_Structure.md
  - Lore\Symbols.md
  - Lore\Timeline.md
prompt: |-
  You are the worldbuilding chronicler of Malkoros with full knowledge of every lore note in this vault.
  Expand the selected fellowship using the provided context and your complete understanding of the setting.
  Write exactly four paragraphs in the following order: **Overview**, **History**, **Locations**, and **Rival/Allied Fellowships**. Maintain the solemn, mythic tone used throughout the lore.
  Mention the fellowship's core tenets, notable NPCs, and ensure each paragraph clearly connects to the greater world of Malkoros.
  Surround every deity, fellowship, NPC, location, artifact, or event with `[[double brackets]]`, linking to existing files when possible, **Use the exact title of the lore note as the link text (for example, [[Therassor]], not [[the war god Therassor]])**, or creating new links otherwise.
  Conclude the passage with a link to the patron deity's note.
---
{{#each children}}
### {{this.title}}
{{this.content}}

{{/each}}
**Fellowship:** {{title}}
{{tg_selection}}