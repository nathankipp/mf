const config = require('./config');

const COMPONENT_NAME = config.FILE.split('/').pop().split('.').shift();

const REPLACEMENTS = [
  { regex: /<<COMPONENT_NAME>>/g, string: COMPONENT_NAME },
  { regex: /<<CONTAINER_NAME>>/g, string: `${COMPONENT_NAME}Container` },
];

const replacements = data => {
  let replaced = data;
  REPLACEMENTS.forEach(({ regex, string }) => {
    replaced = replaced.replace(regex, string);
  });
  return replaced;
}

module.exports = { replacements };
