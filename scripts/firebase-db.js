'use strict';
let firebase = require('firebase');

let app = firebase.initializeApp({
  serviceAccount: 'firebase-credentials.json',
  databaseURL: 'https://win-win-faraz.firebaseio.com'
});

let db = app.database();
// firebase.database.enableLogging(true);

module.exports = db;
