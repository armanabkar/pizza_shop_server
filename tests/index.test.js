import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

describe("Test index; html and images", () => {
  it("should return welcome", (done) => {
    chai
      .request(app)
      .get("/start")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Welcome to Pizza Pizza!");
        done();
      });
  });

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

  it("should return the correct html", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.headers["content-type"].should.have.string("text/html");
        done();
      });
  });
});
