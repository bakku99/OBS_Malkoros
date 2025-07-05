const fs = require('fs');
const path = require('path');

const vaultDir = path.resolve(__dirname, '..');
const loreDir = path.join(vaultDir, 'Lore');
const templatePath = path.join(vaultDir, 'textgenerator', 'templates', 'FellowshipExpander.md');

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(listMarkdownFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(path.relative(vaultDir, full));
    }
  }
  return files.sort();
}

const files = listMarkdownFiles(loreDir);
files.unshift('Lore_Index.md');

let template = fs.readFileSync(templatePath, 'utf8');
const start = template.indexOf('context:');
if (start === -1) throw new Error('context section not found');
const promptIndex = template.indexOf('prompt:', start);
if (promptIndex === -1) throw new Error('prompt section not found');

const before = template.slice(0, start) + 'context:\n';
const after = template.slice(promptIndex);
const list = files.map(f => `  - ${f}`).join('\n');
const newContent = before + list + '\n' + after;
fs.writeFileSync(templatePath, newContent);
console.log(`Updated context with ${files.length} files.`);