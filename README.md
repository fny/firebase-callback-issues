# Firebase Callback Issue

See [the related StackOverflow post](http://stackoverflow.com/questions/37396667/firebase-not-running-callbacks-as-expected/37396965#37396965) for details.

## Setup

 - `npm install`
 - Place your service account credentials in `firebase-credentials.json`
 - Update the URL to the database in `scripts/firebase-db.js`
 - Run `node scripts/setup-db.js` to seed the database with `{ hello: 'world' }` as necessary

## Test Scripts

Four test scripts have been provided to illustrate the issues in the post. See each file description of the experienced output.

 - `scripts/on.js`
 - `scripts/once.js`
 - `scripts/on-with-set.js`
 - `scripts/once-with-set.js`
 - `scripts/on-with-interval-set.js`
