const fs = require('fs');
const yaml = fs.readFileSync('./pre-commit-config.yaml', 'utf8');

let tabs = yaml.replace(/  /g, '\\t');
let enters = tabs.split(/\r?\n/).join('\\n');
let spaces = enters.split(/\s/).join('\\s');

fs.writeFileSync('pre-commit-config.min.txt', spaces);

console.log(spaces);
