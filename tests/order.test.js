import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

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
        totalPrice: 16.78,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Order created");
        done();
      });
  });

  it("should read a order from orders", (done) => {
    chai
      .request(app)
      .get("/api/v1/orders")
      .end((err, res) => {
        res.should.have.status(200);
        const lastItemIndex = res.body.length - 1;
        res.body[lastItemIndex].id.should.be.equal("1");
        res.body[lastItemIndex].name.should.be.equal("example name");
        res.body[lastItemIndex].address.should.be.equal("example address");
        res.body[lastItemIndex].phone.should.be.equal("123456789");
        res.body[lastItemIndex].items[0].should.be.equal("example");
        res.body[lastItemIndex].totalPrice.should.be.equal(16.78);
        done();
      });
  });

  it("should delete the order by id", (done) => {
    chai
      .request(app)
      .delete("/api/v1/orders/delete/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Order deleted");
        done();
      });
  });

  it("should return order not found", (done) => {
    chai
      .request(app)
      .delete("/api/v1/orders/delete/0")
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.be.equal("Order not found");
        done();
      });
  });
});
