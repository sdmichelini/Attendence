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

    it('should get attendence', (done) => {
        request.get('http://localhost:3000/api/attendence')
            .end((err, res) => {
                expect(err).to.not.be.ok;
                expect(res.body).to.have.property('attendence');
                expect(res.body.attendence).to.be.an('array');
                done();
            });
    });

    it('should get attendence for a single event', (done) => {
        let event_id = 1;
        request.get(`http://localhost:3000/api/attendence?event_id=${event_id}`)
            .end((err, res) => {
                expect(err).to.not.be.ok;
                expect(res.body).to.have.property('attendence');
                expect(res.body.attendence).to.be.an('array');
                for(let attendence_item of res.body.attendence) {
                    expect(attendence_item).to.have.property('event_id');
                    expect(attendence_item.event_id).to.equal(event_id);
                }
                done();
            });
    });
});