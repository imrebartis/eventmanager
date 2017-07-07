/*jshint esversion: 6 */
'use strict';

const mongoose = require('mongoose');
const dbName = 'eventmanager';

// connect to the database
mongoose.connect(`mongodb://test:t@ds147902.mlab.com:47902/eventmanager`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
