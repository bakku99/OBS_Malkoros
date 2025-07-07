const fs = require('fs');
const path = require('path');

function listMarkdownFiles(dir, base) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
	const full = path.join(dir, entry.name);
	if (entry.isDirectory()) {
	  files = files.concat(listMarkdownFiles(full, base));
	} else if (entry.isFile() && entry.name.endsWith('.md')) {
	  files.push(path.relative(base, full));
	}
  }
  return files.sort();
}

async function updateContext(vaultDir) {
  const loreDir = path.join(vaultDir, 'Lore');
  const templatePath = path.join(
	vaultDir,
	'textgenerator',
	'templates',
	'FellowshipExpander.md'
  );

  const files = listMarkdownFiles(loreDir, vaultDir);
  files.unshift('Lore_Index.md');

  let template = fs.readFileSync(templatePath, 'utf8');
  const start = template.indexOf('context:');
  if (start === -1) throw new Error('context section not found');
  const promptIndex = template.indexOf('prompt:', start);
  if (promptIndex === -1) throw new Error('prompt section not found');

  const before = template.slice(0, start) + 'context:\n';
  const list = files.map((f) => `  - ${f}`).join('\n');
  const newContent = before + list + '\n' + template.slice(promptIndex);
  fs.writeFileSync(templatePath, newContent);
  return files.length;
}

if (require.main === module) {
  const vaultDir = path.resolve(__dirname, '..');
  updateContext(vaultDir).then((count) => {
	console.log(`Updated context with ${count} files.`);
  });
} else {
  const getBasePath = (tp) => {
	const adapter = tp?.app?.vault?.adapter;
	if (!adapter) return '';
	return adapter.basePath || (typeof adapter.getBasePath === 'function' ? adapter.getBasePath() : '');
  };

  module.exports = async (tp) => {
	try {
	  const base = getBasePath(tp);
	  const count = await updateContext(base);
	  if (tp?.obsidian?.Notice) {
		new tp.obsidian.Notice(`Updated FellowshipExpander with ${count} files`);
	  }
	} catch (err) {
	  if (tp?.obsidian?.Notice) {
		new tp.obsidian.Notice(`generate_lore_context error: ${err.message}`);
	  }
	  console.error(err);
	}
  };
}