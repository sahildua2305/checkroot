/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:14:10
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 19:22:56
*/

'use strict';

function getEnvVar() {
  const env = process.env;

  return env.USER || env.LOGNAME;
}

module.exports = {
  const envVar = getEnvVar();

  if (envVar) {
    return Promise.resolve(envVar);
  }

  return Promise.resolve();
};
