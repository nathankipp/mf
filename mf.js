const fs = require('fs');
const { MF_TEMPLATE, FILE_PATH } = require('./config');
const { replacements } = require('./replacements');

// make dir
if (FILE_PATH !== '.') {
  fs.mkdir(FILE_PATH, { recursive: true }, err => {
    if (err) {
      throw new Error('cannot not write in that path');
    }
  });
}

// make files from templates
fs.readdir(MF_TEMPLATE, (err, files) => {
  files.forEach(file => {
    try {
      fs.readFile(`${MF_TEMPLATE}/${file}`, 'utf8', (err, data) => {
        if (err) throw new Error(err);
        if (!err) {
          const fData = replacements(data);
          fs.writeFile(`${FILE_PATH}/${replacements(file)}`, fData, 'utf8', () => {
            if (err) throw new Error(err);
            console.log(`created: ${FILE_PATH}/${replacements(file)}`);
          });
        }
      });
    } catch (err) { console.log(err); }
  });
});
