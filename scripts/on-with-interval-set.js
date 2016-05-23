'use strict';
let db = require('./firebase-db');

//
// You should see numbers print every few second. These changes won't be visible
// to another script listening with `on`.
//

db.ref('hello').on('value', snapshot => {
  console.log('The value is', snapshot.val());
});

setInterval(() => {
  db.ref('hello').set(Date.now());
}, 1000);


