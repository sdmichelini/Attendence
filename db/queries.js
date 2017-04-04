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
  return db.any('select * from events');
}

function getAllAttendenceItems() {
  return db.any('select * from attendence_items');
}

function getAttendenceForEvents(event_id) {
  return db.query('SELECT * from attendence_items WHERE event_id=${event_id}');
}

module.exports = {
  getAllEvents: getAllEvents,
  getAllAttendenceItems: getAllAttendenceItems,
  getAttendenceForEvents: getAttendenceForEvents
};