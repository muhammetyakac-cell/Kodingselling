// merge_auto.cjs - Merge auto-generated cycle content into blogData.js
const fs = require('fs');
const path = require('path');

const mainFile = 'src/blogData.js';
const cycleNum = process.argv[2] || 'latest';
const tempFile = path.join('db', `auto_cycle${cycleNum}.js`);

if (!fs.existsSync(tempFile)) {
  console.error(`Temp file not found: ${tempFile}`);
  process.exit(1);
}

// Read main file
let mainContent = fs.readFileSync(mainFile, 'utf8');
mainContent = mainContent.trimEnd();
if (mainContent.endsWith('];')) {
  mainContent = mainContent.substring(0, mainContent.length - 2).trimEnd();
}

// Read new content
let newContent = fs.readFileSync(tempFile, 'utf8');

// Extract array content
const start = newContent.indexOf('[') + 1;
const end = newContent.lastIndexOf(']');
if (start === 0 || end === -1) {
  console.error(`Invalid temp file format: ${tempFile}`);
  process.exit(1);
}

let objects = newContent.substring(start, end).trim();
if (!objects.length) {
  console.log('No objects to merge');
  process.exit(0);
}

// Escape backticks inside <code> tags
objects = objects.replace(/<code>([\s\S]*?)<\/code>/g, (m, c) => {
  return '<code>' + c.replace(/`/g, '\\`') + '</code>';
});

// Escape ${} patterns
objects = objects.replace(/\$\{/g, '\\${');

// Merge
mainContent = mainContent + ',\n' + objects + '\n];\n';
fs.writeFileSync(mainFile, mainContent, 'utf8');

// Count IDs merged
const idMatches = objects.match(/id:\s*(\d+)/g) || [];
const ids = idMatches.map(m => m.replace('id:', '').trim());
console.log(`Merged ${ids.length} posts (IDs: ${ids.join(', ')})`);
