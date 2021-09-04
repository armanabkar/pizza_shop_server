import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

describe("Test users methods", () => {
  it("should return user not found", (done) => {
    chai
      .request(app)
      .get("/api/v1/users")
      .send({
        phone: "123456789",
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.be.equal("User does not exist");
        done();
      });
  });

  it("should return user info", (done) => {
    chai
      .request(app)
      .get("/api/v1/users")
      .send({
        phone: "09363860000",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Object");
        res.body.name.should.be.equal("Arman Abkar");
        res.body.address.should.be.equal(
          "2391 S Muddy String Rd, Thayne, WY, 83127"
        );
        res.body.phone.should.be.equal("09363860000");
        done();
      });
  });

  it("should create a new user", (done) => {
    chai
      .request(app)
      .post("/api/v1/users/register")
      .send({
        name: "Example User",
        phone: "123456789",
        address: "Example Address",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Object");
        res.body.name.should.be.equal("Example User");
        res.body.address.should.be.equal("Example Address");
        res.body.phone.should.be.equal("123456789");
        done();
      });
  });

  it("should return user already exists", (done) => {
    chai
      .request(app)
      .post("/api/v1/users/register")
      .send({
        name: "Example User",
        phone: "123456789",
        address: "Example Address",
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.text.should.be.equal("User already exists");
        done();
      });
  });

  it("should delete the user by phone number", (done) => {
    chai
      .request(app)
      .delete("/api/v1/users/delete/123456789")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("User deleted");
        done();
      });
  });

  it("should return user not found", (done) => {
    chai
      .request(app)
      .delete("/api/v1/users/delete/123456789")
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.be.equal("User does not exist");
        done();
      });
  });
});
