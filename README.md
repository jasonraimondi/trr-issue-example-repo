```
npm install
npm run test
```

```
> ts-node test.ts

Error: Cannot find module 'typesafe-react-router'
    at Function.Module._resolveFilename (module.js:548:15)
    at Function.Module._load (module.js:475:25)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/jason/Code/test/test.ts:1:1)
    at Module._compile (module.js:653:30)
    at Module.m._compile (/Users/jason/Code/test/node_modules/ts-node/src/index.ts:439:23)
    at Module._extensions..js (module.js:664:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/Users/jason/Code/test/node_modules/ts-node/src/index.ts:442:12)
    at Module.load (module.js:566:32)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! test@1.0.0 test: `ts-node test.ts`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the test@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/jason/.npm/_logs/2018-12-17T18_48_52_100Z-debug.log
```