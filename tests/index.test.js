import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

it("should return a image", (done) => {
  chai
    .request(app)
    .get("/images/margherita.jpg")
    .end((err, res) => {
      res.should.have.status(200);
      res.headers["content-type"].should.have.string("image/jpeg");
      done();
    });
});

it("should return a html", (done) => {
  chai
    .request(app)
    .get("/")
    .end((err, res) => {
      res.should.have.status(200);
      res.headers["content-type"].should.have.string("text/html");
      done();
    });
});
