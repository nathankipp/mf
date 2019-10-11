const MF_PATH = process.argv[1].replace(/\/mf.js$/, '');
const MF_TEMPLATE = `${MF_PATH}/templates/${process.argv[3]}`;
const FILE = process.argv[2];
const FILE_PATH = FILE.replace(/\/[\w\.]*$/, '');

module.exports = {
  MF_PATH,
  MF_TEMPLATE,
  FILE,
  FILE_PATH,
};
