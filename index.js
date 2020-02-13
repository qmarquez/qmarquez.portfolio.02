const fs = require('fs');
const path = require('path');

const defaultConfig = {
  caseType: 'pascal',
  excludePattern: 'index.js',
  removeExtension: true
}

function indexCreator(dir, config) {
  if (!dir) {
    throw new Error('dir parameter it\'s mandatory.');
  }

  const { caseType,
    excludePattern,
    removeExtension } = { ...defaultConfig, ...config };
  const caseTypes = {
    pascal: new RegExp('(?:^|[-.])(.)', 'ig'),
    camel: new RegExp('[-.](.)', 'ig')
  }

  if (!caseTypes[caseType]) {
    throw new Error('Bad caseType value only pascal or camel accepted.');
  }

  const indexObject = {};

  for (const file of fs.readdirSync(dir)) {
    if (file.match(excludePattern)) { continue; }

    const rawName = file.split('.');
    if (rawName.length > 1 && removeExtension) {
      rawName.pop();
    }

    const exportName = rawName
      .join('.')
      .replace(
        caseTypes[caseType],
        (result, capture) => (capture || result).toUpperCase()
      );

    indexObject[exportName] = require(path.join(dir, file));
  }

  return indexObject;
}

module.exports = indexCreator;