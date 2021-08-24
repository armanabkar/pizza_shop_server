import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

describe("Test foods methods", () => {
  it("should get all foods", (done) => {
    chai
      .request(app)
      .get("/api/v1/foods")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Array");
        res.body.should.have.lengthOf(15);
        done();
      });
  });
});

describe("Test orders methods", () => {
  it("should get all orders", (done) => {
    chai
      .request(app)
      .get("/api/v1/orders")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Array");
        done();
      });
  });

  it("should create a new order", (done) => {
    chai
      .request(app)
      .post("/api/v1/orders/add")
      .send({
        id: "1",
        name: "example name",
        address: "example address",
        phone: "123456789",
        items: ["example"],
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should delete the order by id", (done) => {
    chai
      .request(app)
      .delete("/api/v1/orders/delete/1")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should return not found 404", (done) => {
    chai
      .request(app)
      .delete("/api/v1/orders/delete/0")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
