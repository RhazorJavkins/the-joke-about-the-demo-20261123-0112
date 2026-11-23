import { mkdirSync, writeFileSync } from 'node:fs';

const joke = 'My AI coding agent fixed the demo crash. The catch block now says, “Please welcome to the stage whoever clicked Approve.”';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', joke, 'utf8');
