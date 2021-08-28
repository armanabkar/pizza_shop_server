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

describe("Test foods methods", () => {
  it("should get all foods", (done) => {
    chai
      .request(app)
      .get("/api/v1/foods")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Array");
        res.body.should.have.lengthOf(15);
        res.body[0].name.should.be.equal("BBQ Chicken Pizza");
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
        res.body[1].id.should.be.equal("1");
        res.body[1].name.should.be.equal("example name");
        res.body[1].address.should.be.equal("example address");
        res.body[1].phone.should.be.equal("123456789");
        res.body[1].items[0].should.be.equal("example");
        res.body[1].totalPrice.should.be.equal(16.78);
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
