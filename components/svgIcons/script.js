const fs = require('fs');
const path = require('path');

const iconsPath = path.resolve(__dirname, './testIcons');

fs.readdir(iconsPath, (err, items) => {
  for (let i = 0; i < items.length; i++) {
    let type = items[i].replace('.js', '');
    type = type.toLowerCase();
    //console.log(`case '${type}': return SvgIcons.${items[i].replace('.js', '')}`);
    //console.log(`<CapIcon type="${type}" />`);
    console.log(`export { default as ${items[i].replace('.js', '')} } from './Icons/${items[i].replace('.js', '')}';`);
  }

  for (let i = 0; i < items.length; i++) {
    let type = items[i].replace('.js', '');
    type = type.toLowerCase();
    //console.log(`case '${type}': return SvgIcons.${items[i].replace('.js', '')}`);
    console.log(`<CapIcon type="${type}" />`);
    //console.log(`export { default as ${items[i].replace('.js', '')} } from './Icons/${items[i].replace('.js', '')}';`);
  }

  for (let i = 0; i < items.length; i++) {
    let type = items[i].replace('.js', '');
    type = type.toLowerCase();
    console.log(`case '${type}': return SvgIcons.${items[i].replace('.js', '')}`);
    //console.log(`<CapIcon type="${type}" />`);
    //console.log(`export { default as ${items[i].replace('.js', '')} } from './Icons/${items[i].replace('.js', '')}';`);
  }
});
