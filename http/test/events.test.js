'use strict';
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;
const request = require('superagent');

describe('Events Test', () => {
    it('should get all of the events', (done) => {
        request.get('http://localhost:3000/api/events')
            .end((err, res) => {
                expect(err).to.not.be.ok;
                expect(res.body).to.have.property('events');
                expect(res.body.events).to.be.an('array');
                done();
            });
    });

    it('should get a single events attendence', (done) => {
        request.get('http://localhost:3000/api/attendence?event_id=1')
            .end((err, res) => {
                expect(err).to.not.be.ok;
                expect(res.body).to.have.property('attendence');
                expect(res.body.attendence).to.be.an('array');
                done();
            });
    });
});