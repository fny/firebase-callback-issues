'use strict';
let db = require('./firebase-db');

db.ref('hello').set('world');
