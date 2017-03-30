const app = require('../app');

describe('HTTP Tests', ()=>{
    let server; 
    before((done) => {
        server = app.listen(3000, done);
    });

    require('./attendence.test');
    require('./events.test');

    after(() => {
        server.close();
    });
});