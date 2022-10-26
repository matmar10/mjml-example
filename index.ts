import { join } from 'path';
import { readFileSync } from 'fs';
import mjml2html from 'mjml-core';

const examples = ['example-1.mjml', 'example-2.mjml'];
const results = [];
const errors = [];

examples.forEach(filename => {
  const src = readFileSync(join(__dirname, filename), 'utf8');
  try {
    const html = mjml2html(src);
    results.push(html);
  } catch (err) {
    errors.push(err);
    console.error(err);
  }
});

console.log(`${results.length} examples succeeded.`);
console.log(`${errors.length} examples failed.`);


