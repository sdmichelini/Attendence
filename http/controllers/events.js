'use strict';

const getAllEvents = require('../../db/queries.js').getAllEvents;
const getEvent = require('../../db/queries.js').getEvent;

module.exports = {
    getEvents: (req, res) => {
        getAllEvents().then(events => {
            res.json({
                events: events
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ errors: ['Internal Server Error']})
        })
    },
    getEvent: (req, res) => {
        let id = req.params.id;
        getEvent(id).then(event => {
            console.log(event);
            if(!event) {
                res.status(404).json({
                    errors: ['Event Not Found.']
                });
            } else {
                res.json({
                    event: event
                });
            }
        })
        .catch(err => {
            if(err.code != undefined){
                res.status(404).json({
                    errors: ['Event Not Found.']
                });
            } else {
                res.status(500).json({ errors: ['Internal Server Error']});
            }
        });
    }
}