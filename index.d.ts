declare function indexCreator(dir: String, config: { caseType?: 'pascal' | 'camel' = 'pascal', excludePattern?: String | RegExp = 'index.js' }): {};
declare namespace indexCreator { }

export = indexCreator;