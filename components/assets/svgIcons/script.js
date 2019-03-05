const fs = require('fs');
const path = require('path');

const iconsPath = path.resolve(__dirname, './Icons');


const convertToType = (string) => {
  let str = string.charAt(0).toLowerCase() + string.slice(1);
  str = str.split(/(?=[A-Z])/)
  str = str.map((s) => s.charAt(0).toLowerCase() + s.slice(1))
  return str.join('-')
}

fs.readdir(iconsPath, (err, items) => {
  for (let i = 0; i < items.length; i++) {
    let type = items[i].replace('.js', '');
    //console.log(`export { default as ${items[i].replace('.js', '')} } from './Icons/${items[i].replace('.js', '')}';`);
  }

  for (let i = 0; i < items.length; i++) {
    let type = items[i].replace('.js', '');
    type = convertToType(type);
    //console.log(`case '${type}': return SvgIcons.${items[i].replace('.js', '')}`);
    console.log(`<List><CapIcon type="${type}" /><Text>${type}</Text></List>`);
  }
});
