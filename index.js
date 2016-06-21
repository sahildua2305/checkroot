/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:14:10
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 19:50:49
*/

'use strict';

const mem = require('mem');

function getEnvVar() {
  const env = process.env;

  return env.USER || env.LOGNAME;
}

module.exports = mem(() => {
  const envVar = getEnvVar();

  if (envVar) {
    return envVar;
  }

  return;
});
