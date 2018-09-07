# react-app-rewire-date-fns
Add date-fns babel plugin to create-react-app using react-app-rewired

[![npm](https://img.shields.io/npm/v/react-app-rewire-date-fns.svg)](https://www.npmjs.com/package/react-app-rewire-date-fns)


Add the `date-fns` to `create-react-app` app via [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation
```
yarn add --dev react-app-rewire-date-fns
// or
npm install --save-dev react-app-rewire-date-fns
```

## Usage
In the `config-overrides.js` you created for `react-app-rewired` add this code:

```
const rewireDatefns = require('react-app-rewire-date-fns');

/* config-overrides.js */
module.exports = function override(config, env) {
  return rewireDatefns(config, env, { ...babelPluginOptions });
}
```
