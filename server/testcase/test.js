const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;
const user = require('../models/user')
const product = require('../models/product')


describe('POST /signup', function(){
        it('returns object with 200 status response', function(done){
            chai.request(app)
                .post('/signup')
                .send({
                    name:'example',
                    email:'example@mail.com',
                    password:12345
                })
                .end(function(err,res){
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
        it('returns error email is invalid, has to be in the correct format', function(done){
            chai.request(app)
                .post('/signup')
                .send({
                    name:'example',
                    email:'example@mail.com',
                    password:12345
                })
                .end(function(err,res){
                    expect(res).to.have.status(400)
                    done()
                })
        })
    })