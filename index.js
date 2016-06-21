/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:14:10
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 20:50:53
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
    return (envVar === 'root');
  }

  var username;

  try {
    if (process.platform === 'darwin' || process.platform === 'linux') {
      username = cleanOutput(exec('id', ['-un'], {
        encoding: 'utf8'
      }));
      return (username === 'root');
    } else if (process.platform === 'win32') {
      username = cleanOutput(exec('whoami', {
        encoding: 'utf8'
      }));
      return (username === 'root');
    }
  } catch (err) {}
});
