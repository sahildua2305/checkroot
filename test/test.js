/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:23:11
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 20:13:53
*/

'use strict';

import test from 'ava';

test.serial('checkroot() when user is not root', async t => {
  process.env.USER = 'sahildua';
  process.env.LOGNAME = 'sahildua';
  t.is(require('../')(), false);
});
