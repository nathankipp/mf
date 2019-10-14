const config = require('../lib/args');

const FUNCTION = config.FILE.split('/').pop().split('.').shift();
const REACT_CONTAINER = `${FUNCTION}Container`;

let replacements = [
  ['<<FUNCTION>>', FUNCTION],
  ['<<REACT_COMPONENT>>', FUNCTION],
  ['<<REACT_CONTAINER>>', REACT_CONTAINER],
];

replacements = replacements.map(([replaceMe, withMe]) => (
  [new RegExp(replaceMe, 'g'), withMe]
));


module.exports = { replacements };
