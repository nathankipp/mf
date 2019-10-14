const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("close", function() {
  process.exit(0);
});
const { MF_TEMPLATE, FILE_PATH } = require('./config');
const { replacements } = require('./replacements');

function makeDir() {
  if (FILE_PATH === '.') {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    fs.mkdir(FILE_PATH, { recursive: true }, err => {
      if (err) {
        reject('mf cannot not write to that path');
      }
      resolve();
    });
  });
}

function readTemplateFile(file) {
  return new Promise(resolve => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(`Warning: the template file ${file} cannot be read`);
        resolve();
      };
      resolve(data);
    });
  });
}

function shouldWrite(newFile) {
  return new Promise(resolve => {
    fs.access(newFile, err => {
      if (!err) {
        rl.question(`Warning: ${newFile} exists. Overwrite (y/n)? `, a => {
          if (a === 'n') {
            resolve(false);
          } else {
            resolve(true);
          }
        });
      } else {
        resolve(true);
      }
    });
  });
}

function writeFile(newFile, data) {
  return new Promise(resolve => {
    fs.writeFile(newFile, replacements(data), 'utf8', err => {
      if (err) {
        resolve(`Warning: could not write ${newFile}`);
      }
      resolve(`Created: ${newFile}`);
    });
  });
}

(async function mf() {
  await makeDir();
  const files = fs.readdirSync(MF_TEMPLATE);
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const data = await readTemplateFile(`${MF_TEMPLATE}/${file}`);
    if (data) {
      const newFile = `${FILE_PATH}/${replacements(file)}`;
      const okToWrite = await shouldWrite(newFile);
      if (okToWrite) {
        const write = await writeFile(newFile, replacements(data));
        console.log(write);
      }
    }
  }
  rl.close();
})();
