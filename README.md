# Usage

Just require the package on the index file and assign to `module.exports`, give it the `__dirname` thats it!

```javascript
module.exports = require('index_creator')(__dirname)
```

## Extra config

```javascript
require('index_creator')(__dirname, caseType? = 'pascal', excludePattern? = 'index.js')
```

- caseType: one of `camel` or `pascal`.
- excludePattern: `String | RegExp` if you want to exclude some files of your index. By default exclude the `index.js` file itself.