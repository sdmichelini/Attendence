'use strict';

const express = require('express');
const app = express();

const cors = require('cors')

app.use(cors());

app.get('/api/events', (req, res) => {
    res.json({
        events: [
            { id: 1, name: 'Server Event 1', when: new Date(0), type: 1},
            { id: 2, name: 'Made in Express', when: new Date(10000), type: 3}
        ]
    });
});



module.exports = app;