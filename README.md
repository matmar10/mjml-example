# mjml-example

Reproduces erroneous behavior in MJML current version

## Steps to reproduce

1. `npm install`
2. `npm run validate` demonstrates no validation error reported
3. `npm start` shows use of JS API

## Expected Behavior

The valid templates should be rendered to HTML.

## Actual behavior

Error is raised:

```
Error: Malformed MJML. Check that your structure is correct and enclosed in <mjml> tags.
    at mjml2html
```
