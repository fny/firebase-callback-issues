'use strict';
let db = require('./firebase-db');

//
// You should see "The value is moon" print.
//

db.ref('hello').once('value', snapshot => {
  console.log('The value is', snapshot.val());
}, error => console.log('Error ', error));

db.ref('hello').set('ABE!!!');
