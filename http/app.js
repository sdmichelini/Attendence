'use strict';
const express = require('express');
const cors = require('cors');

const attendence = require('./controllers/attendence');
const events = require('./controllers/events');

const app = express();

app.use(cors());

app.get('/api/attendence', attendence.getAttendence);

app.get('/api/events', events.getEvents);
app.get('/api/events/:id', events.getEvent);

module.exports = app;