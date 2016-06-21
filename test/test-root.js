/*
* @Author: sahildua2305
* @Date:   2016-06-21 20:07:34
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 20:13:58
*/

'use strict';

import test from 'ava';

test.serial('checkroot() when user is root', async t => {
  process.env.USER = 'root';
  process.env.LOGNAME = 'root';
  t.is(require('../')(), true);
});
