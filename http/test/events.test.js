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

    it('should get a single event', (done)=>{
        request.get('http://localhost:3000/api/events/1')
            .end((err, res) => {
                expect(err).to.not.be.ok;
                expect(res.body).to.have.property('event');
                expect(res.body.event).to.be.an('object');
                expect(res.body.event).to.have.property('name');
                expect(res.body.event).to.have.property('when');
                expect(res.body.event).to.have.property('type');
                done();
            });
    });

    it('should not find an event if it is not associated with the id', (done)=>{
        request.get('http://localhost:3000/api/events/badXyId')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.have.property('errors');
                expect(res.body.errors).to.be.an('array');
                done();
            });
    });
});