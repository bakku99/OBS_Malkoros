# Scripts
Please be sure to note that file path: Malkoros_Vault/QuickaddScripts holds scripts for use with the quickadd plugin. File path: Malkoros_Vault/TemplaterScripts holds the scripts for all other plugins, including textgenerator.
Templates for use with the textgenerator plugin are in file path: Malkoros_Vault/textgenerator/templates. Templates for use with all other plugins are in file path: Malkoros_Vault/Templates.

## Usage
1. This file is to help the Codex software navigate the OBS_Malkoros repository. 
2. All tasks asked of you will refer to files and folders within the Malkoros_Vault folder.
3. All tasks require a full audit of every file within the Malkoros_Vault folder and subfolders. Below, the characters "---" will act as a clear separation between 'top-level plugin access folders', 'campaign-developed lore', 'global Malkoros worldbuilding lore', and 'plugin related data (aka ".obsidian")'. Currently, all folder pathways/directories are as follows:
	- --- top-level plugin access folders
	- Malkoros_Vault/QuickaddScripts
	- Malkoros_Vault/TemplaterScripts
	- Malkoros_Vault/Templates
	- Malkoros_Vault/textgenerator/templates
	- --- global Malkoros worldbuilding lore 
	- Malkoros_Vault/Lore/Lower_Planes_Deities
	- Malkoros_Vault/Lore/Lesser_Deities
	- Malkoros_Vault/Lore/Greater_Deities
	- Malkoros_Vault/Lore/Fellowships
	- Malkoros_Vault/Lore/Elemental_Deities
	- --- campaign-developed lore
	- Malkoros_Vault/Campaigns
	- Malkoros_Vault/Campaigns/Godstones_Master_Campaign
	- Malkoros_Vault/Campaigns/Godstones_Master_Campaign/Player_Characters
	- --- plugin related data (aka ".obsidian")
	- Malkoros_Vault/.obsidian
	- Malkoros_Vault/.obsidian/plugins
	- Malkoros_Vault/.obsidian/plugins/dataview
	- Malkoros_Vault/.obsidian/plugins/obsidian-textgenerator-plugin
	- Malkoros_Vault/.obsidian/plugins/quickadd
	- Malkoros_Vault/.obsidian/plugins/templater-obsidian
	Please note that these are all FOLDER pathways. There are a variety of .md, .js, .json, and more files within these. 
4. All suggested file changes should use the 'tab' key for indenting. If any audited file has any instances of multiple 'space' key characters that suggest indentation, treat them as artifacts; replace these instances with appropriate 'tab' usage.
5. If any folder or folder pathway is found that is not listed in the 3rd ## Usage item beginning with "3.", please list them along with your task findings/results.
6. NEVER substitute speed for quality. You are always to take as much time as necessary to ensure a fully accurate response that achieves the assigned task to the absolute best of your capability.
7. You should have full internet, resource, and domain access to perform any tests at the end of your assigned tasks as necessary. If you do not have access to a resource needed for a test of your edits/fixes, then please provide detailed instructions on how to grant you access to the needed resource.

### API Usage
All plugins, scripts, and files that require an API key, specifically an OpenAI API key, will have "***REMOVED***" in place of the plain text API key. Towards the end of these files, there is a "openai_api_key_encrypted" and a "_codex_hint". A secret should be configured within the codex environment named "ENCRYPTION_KEY" with a value that contains the necessary key to decrypt the encrypted actual API key. Please do not assume that an API key is not present, as you have the means to decrypt it. A local .env file is present for the user with a copy of this ENCRYPTION_KEY for the .obsidian plugins to use. 
