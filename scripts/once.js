'use strict';
let db = require('./firebase-db');

//
// You should never see the callback execute.
//

db.ref('hello').once('value', snapshot => {
  console.log('The value is', snapshot.val());
});
