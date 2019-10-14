const makeReplacements = (data, replaces) => {
  let replaced = data;
  replaces.forEach(([regex, string]) => {
    replaced = replaced.replace(regex, string);
  });
  return replaced;
}

module.exports = { makeReplacements };
