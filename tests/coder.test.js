const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../lib/app');

describe('server', () => {
    const request = chai.request(app);

    describe('coder', () => {
        it('says hello world', done => {
        });

    })