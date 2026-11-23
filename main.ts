import { mkdirSync, writeFileSync } from 'node:fs';

const joke = 'The live demo crashed, so my AI coding agent added a fallback that says, “Let’s skip to the Q&A.”';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', joke, 'utf8');
