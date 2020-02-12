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
    excludePattern?: String | RegExp = 'index.js'
  }
);
```