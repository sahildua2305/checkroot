/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:23:11
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 20:41:30
*/

'use strict';

import test from 'ava';

test.serial('checkroot() when environment variables are not set', async t => {
  process.env.USER = '';
  process.env.LOGNAME = '';
  t.is(require('../')(), 'sahildua2305');
});
