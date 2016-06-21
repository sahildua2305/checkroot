/*
* @Author: sahildua2305
* @Date:   2016-06-21 19:23:11
* @Last Modified by:   Sahil Dua
* @Last Modified time: 2016-06-21 19:24:49
*/

'use strict';

import test from 'ava';

test.serial('checksudo()', async t => {
  process.env.USER = "sahildua";
  t.is(await require('./')(), 'sahildua');
});
