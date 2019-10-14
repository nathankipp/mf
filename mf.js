const { MF_TEMPLATE, FILE_PATH } = require('./lib/args');
const {
  makeDir,
  readDir,
  readTemplateFile,
  shouldWriteFn,
  writeFile,
} = require('./lib/fileSystem');
const { makeReplacements } = require('./lib/makeReplacements');
const { replacements } = require('./templates/replacements');
const { rl, exit } = require('./lib/rl');
const shouldWrite = shouldWriteFn(rl);

(async function mf() {
  await makeDir(FILE_PATH);
  const files = readDir(MF_TEMPLATE);
  // TODO: support folder-specific replacements here
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const data = await readTemplateFile(`${MF_TEMPLATE}/${file}`);
    if (data) {
      const newFile = `${FILE_PATH}/${makeReplacements(file, replacements)}`;
      const okToWrite = await shouldWrite(newFile);
      if (okToWrite) {
        const write = await writeFile(newFile, makeReplacements(data, replacements));
        console.log(write);
      }
    }
  }
  exit();
})();
