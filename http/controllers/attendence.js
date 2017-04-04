'use strict';

const getAllAttendence = require('../../db/queries.js').getAllAttendenceItems;
const getAttendenceForEvent 
    = require('../../db/queries.js').getAttendenceForEvents;

module.exports = {
    getAttendence: (req, res) => {
        getAllAttendence()
        .then(result => {
            const ATTENDENCE = result.map(item => {
                let return_item = {};
                return_item.user = {
                    name: item.user_name,
                    id: item.user_id
                };
                return_item.event_id = item.event_id;
                return_item.presence = item.presence;
                return return_item;
            });
            const FILTERED_ATTENDENCE = ATTENDENCE.filter((item) => {
                // We can filter by more query parameters if we like
                if(req.query.event_id) {
                    return req.query.event_id == String(item.event_id);
                } else {
                    return true;
                }
            });
            res.json({
                attendence: FILTERED_ATTENDENCE
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ errors: ['Internal Server Error']})
        });
        
    }
}