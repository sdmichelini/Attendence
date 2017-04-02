'use strict';

module.exports = {
    getAttendence: (req, res) => {
        const ATTENDENCE = [
                { id: 1, user: {
                    name: 'Sample Person',
                    id: 'xyz'
                }, event_id: 1
                , presence: 0 },
                { id: 2, user: {
                    name: 'Sample Person',
                    id: 'xyz'
                }, event_id: 2,
                presence: 3 }
            ];
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
    }
}