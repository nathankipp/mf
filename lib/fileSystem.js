const fs = require('fs');

function readDir(dir) {
  return fs.readdirSync(dir);;
}

function makeDir(dir) {
  if (dir === '.') {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, { recursive: true }, err => {
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

function shouldWriteFn(rl) {
  return newFile => new Promise(resolve => {
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
    fs.writeFile(newFile, data, 'utf8', err => {
      if (err) {
        resolve(`Warning: could not write ${newFile}`);
      }
      resolve(`Created: ${newFile}`);
    });
  });
}

module.exports = {
  makeDir,
  readDir,
  readTemplateFile,
  shouldWriteFn,
  writeFile,
};
