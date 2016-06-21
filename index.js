/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:14:10
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 20:45:29
*/

'use strict';

const exec = require('child_process').execFileSync;
const mem = require('mem');

function getEnvVar() {
  const env = process.env;

  return env.USER || env.LOGNAME;
}

function cleanOutput(o) {
  return o.replace(/^.*\\/, '').replace('\n', '');
}

module.exports = mem(() => {
  const envVar = getEnvVar();

  if (envVar) {
    // console.log(envVar);
    // console.log(envVar === 'root');
    return envVar === 'root';
  }

  try {
    if (process.platform === 'darwin' || process.platform === 'linux') {
      var username = cleanOutput(exec('id', ['-un'], {encoding: 'utf8'}));
      console.log(username);
      return username;
    }
  } catch (err) {}
});
