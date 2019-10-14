if (process.argv.length !== 4) {
  console.log('Insufficient arguments. Try $ mf [FILE] [TEMPLATE]');
  process.exit(1);
}

const MF_PATH = process.argv[1].replace(/\/mf.js$/, '');
const MF_TEMPLATE = `${MF_PATH}/templates/${process.argv[3]}`;
const FILE = process.argv[2];
let FILE_PATH = FILE.replace(/\/[\w\.]*$/, '');

if (FILE === FILE_PATH) {
  FILE_PATH = '.';
}

module.exports = {
  MF_PATH,
  MF_TEMPLATE,
  FILE,
  FILE_PATH,
};
