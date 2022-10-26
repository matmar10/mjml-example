const path = require('path');
const fs = require('fs');
const mjml2html = require('mjml-core').default;

const examples = ['example-1.mjml', 'example-2.mjml', 'example-3.mjml'];
const results = [];
const errors = [];

examples.forEach(filename => {
  const src = fs.readFileSync(path.join(__dirname, filename), 'utf8');
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


