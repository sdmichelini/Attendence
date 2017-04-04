'use strict';

const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);

const connectionObject = {
    host: 'localhost',
    port: 5432,
    database: 'attendence',
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD
}
const db = pgp(connectionObject);

// add query functions
function getAllEvents() {
    console.log(process.env.PG_USERNAME);
    return db.any('select * from events');
}

module.exports = {
  getAllEvents: getAllEvents
};