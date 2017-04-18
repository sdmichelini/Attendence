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
  return db.any('SELECT * FROM events');
}

function getEvent(id) {
  return db.one('SELECT * FROM events WHERE id=$1',[id]);
}

function getAllAttendenceItems() {
  return db.any('SELECT * FROM attendence_items');
}

function getAttendenceForEvents(event_id) {
  return db.query('SELECT * from attendence_items WHERE event_id=${event_id}');
}

module.exports = {
  getAllEvents: getAllEvents,
  getEvent: getEvent,
  getAllAttendenceItems: getAllAttendenceItems,
  getAttendenceForEvents: getAttendenceForEvents
};