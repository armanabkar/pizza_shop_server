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
        res.body[0].name.should.be.equal("BBQ Chicken Pizza");
        done();
      });
  });
});
