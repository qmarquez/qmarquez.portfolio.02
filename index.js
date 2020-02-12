const fs = require('fs');
const path = require('path');

function indexCreator(dir, caseType = 'pascal', excludePattern = 'index.js') {
  if (!dir) {
    throw new Error('dir parameter it\'s mandatory.');
  }
  if (!caseTypes[caseType]) {
    throw new Error('Bad caseType value only pascal or camel accepted.');
  }

  const indexObject = {};
  const caseTypes = {
    pascal: new RegExp('^(.)|[-.](.)', 'ig'),
    camel: new RegExp('[-.](.)', 'ig')
  }

  for (const file of fs.readdirSync(dir)) {
    if (file.match(excludePattern)) { continue; }

    const rawName = file.split('.');
    rawName.pop();

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