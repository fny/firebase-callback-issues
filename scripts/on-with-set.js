'use strict';
let db = require('./firebase-db');

//
// You should see "The value is moon" print. Making changes in the Firebase
// console will not cause the callback to execute again.
//

db.ref('hello').on('value', snapshot => {
  console.log('The value is', snapshot.val());
}, error => console.log('Error ', error));

db.ref('hello').set('moon');
