'use strict';

const express = require('express');
const app = express();

const cors = require('cors')

app.use(cors());

app.get('/api/attendence', (req, res) => {
    const ATTENDENCE = [
            { id: 1, user: {
                name: 'Sample Person',
                id: 'xyz'
            }, event_id: 1 },
            { id: 2, user: {
                name: 'Sample Person',
                id: 'xyz'
            }, event_id: 2 }
        ];
    const FILTERED_ATTENDENCE = ATTENDENCE.filter((item) => {
        if(req.query.event_id) {
            return req.query.event_id == String(item.event_id);
        } else {
            return true;
        }
    });
    res.json({
        attendence: FILTERED_ATTENDENCE
    });
});

app.get('/api/events', (req, res) => {
    res.json({
        events: [
            { id: 1, name: 'Server Event 1', when: new Date(0), type: 1},
            { id: 2, name: 'Made in Express', when: new Date(10000), type: 3}
        ]
    });
});



module.exports = app;