'use strict';

const EVENTS = [
            { id: 1, name: 'Server Event 1', when: new Date(0), type: 1},
            { id: 2, name: 'Made in Express', when: new Date(10000), type: 3}
        ];

module.exports = {
    getEvents: (req, res) => {
        res.json({
            events: EVENTS
        });
    },
    getEvent: (req, res) => {
        let id = req.params.id;
        const MATCHING_EVENT = EVENTS.filter((event) => {
            return String(event.id) == id;
        }); 
        if(MATCHING_EVENT.length == 0) {
            res.status(404).json({
                errors: ['Event Not Found.']
            });
        } else {
            res.json({
                event: MATCHING_EVENT[0]
            });
        }
    }
}