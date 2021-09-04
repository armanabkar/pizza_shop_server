import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

describe("Test reservations methods", () => {
  it("should get all reservations", (done) => {
    chai
      .request(app)
      .get("/api/v1/reservations")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Array");
        done();
      });
  });

  it("should create a new reservation", (done) => {
    chai
      .request(app)
      .post("/api/v1/reservations/add")
      .send({
        id: "1",
        name: "example name",
        phone: "123456789",
        tableSize: "Medium",
        time: "1631304000000",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Reservation created");
        done();
      });
  });

  it("should read a reservation from reservations", (done) => {
    chai
      .request(app)
      .get("/api/v1/reservations")
      .end((err, res) => {
        res.should.have.status(200);
        res.body[1].id.should.be.equal("1");
        res.body[1].name.should.be.equal("example name");
        res.body[1].phone.should.be.equal("123456789");
        res.body[1].tableSize.should.be.equal("Medium");
        res.body[1].time.should.be.equal("1631304000000");
        done();
      });
  });

  it("should delete the reservation by id", (done) => {
    chai
      .request(app)
      .delete("/api/v1/reservations/delete/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Reservation deleted");
        done();
      });
  });

  it("should return reservation not found", (done) => {
    chai
      .request(app)
      .delete("/api/v1/reservations/delete/0")
      .end((err, res) => {
        res.should.have.status(404);
        res.text.should.be.equal("Reservation not found");
        done();
      });
  });
});
