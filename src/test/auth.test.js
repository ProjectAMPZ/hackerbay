import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import Sinonchai from 'sinon-chai';
import app from '../index';

import AuthController from '../controllers/auth.controller';

chai.should();
chai.use(Sinonchai);
chai.use(chaiHttp);

const user = {
  username: 'hackerbay',
  password: '24567/8'
};
const invalidUser = {
  username: '',
  password: '24567/8'
};

describe('Auth Route Endpoints', () => {
  describe('POST api/v1/auth/login', () => {
    it('should successfully login a user if he/she provides valid credentials', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('status').eql('success');
          res.body.should.have.property('data');
          done();
        });
    });
    it('should fake login server error', (done) => {
      const req = { body: {} };
      const res = {
        status() { },
        send() { }
      };

      sinon.stub(res, 'status').returnsThis();

      AuthController.login(req);
      done();
    });
    it('should not login a user if he/she provides invalid credentials', (done) => {
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(invalidUser)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('status').eql('400 Invalid Request');
          res.body.should.have.property('error');
          done();
        });
    });
  });
});
