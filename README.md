# Usage

Just require the package on the index file and assign to `module.exports`, give it the `__dirname` thats it!

```javascript
module.exports = require('index_creator')(__dirname)
```

## Config

```javascript
require('index_creator')(
  __dirname, 
  config = {
    caseType?: 'camel' | 'pascal' = 'pascal', 
    excludePattern?: String | RegExp = 'index.js',
    removeExtension?: Boolean = true
  }
);
```

- **caseType** Switch if use camel or pascal case to create the `module.exports` property name.
- **exludePatter** Pattern that if a file or folder match will be excluded from the final object.
- **removeExtension** Switch if the package will remove the last `'.some'` or not. If a file has no dots on it's name will stay as is.

NOTE: if the dir has subdirs it will need a index too to work or should be explicitly ignored on excludePattern.