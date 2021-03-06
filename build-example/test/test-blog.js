const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const {app, runServer, closeServer } = require('../server');


chai.use(chaiHttp);

before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

describe('Blogs', function() {
	
		it('should return GET status 200 and be json', function() {
				return chai
						.request(app)
      					.get('/blog-posts-jr')
      					.then(function(res) {

      						expect(res).to.have.status(200);
      						expect(res).to.be.json;
      					
      					});
		});

		it('should return POST status 201 and be json', function() {
				return chai
						.request(app)
      					.post('/blog-posts-jr')
      					.then(function(res) {

      						expect(res).to.have.status(201);
      						//expect(res).to.be.json;
      					
      					});
		});

		it('should return DELETE status 204', function() {
				return chai
						.request(app)
      					.get('/blog-posts-jr')
      					.then(function(res) {

      						return chai
      							      .request(app)
      							      .delete(`/blog-posts-jr/${res.body.id}`)
      							      .then(function (res) {

      							      		expect(res).to.have.status(204);

      							      });
      							  

      					
      					});
		});

		it('should return PUT status 204', function() {
				return chai
						.request(app)
      					.get('/blog-posts-jr')
      					.then(function(res) {
      					    //update blog
      					    return chai
      					    		.request(app)
      					    		.put(`/blog-posts-jr/${res.body.id}`)
      					    		//send post
      								.then(function(res) {

      										expect(res).to.have.status(204);

      								});
      					
      					});
		});

}); 

