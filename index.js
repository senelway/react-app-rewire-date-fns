const { injectBabelPlugin } = require('react-app-rewired');

function rewireDatefns(config, env, datefnsBabelOptions = {}) {
  config = injectBabelPlugin(['date-fns', datefnsBabelOptions], config);
  return config;
}

module.exports = rewireDatefns;
