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

  it("should get the correct info of the first food", (done) => {
    chai
      .request(app)
      .get("/api/v1/foods")
      .end((err, res) => {
        res.body[0].name.should.be.equal("BBQ Chicken Pizza");
        res.body[0].price.should.be.equal(14.99);
        res.body[0].type.should.be.equal("pizza");
        res.body[0].ingredients.should.be.equal(
          "Pizza crust, spicy barbecue sauce, chicken breast halves, fresh cilantro, pepperoncini peppers, red onion, Colby-Monterey Jack cheese"
        );
        res.body[0].image.should.be.equal("images/bbq_chicken.jpg");
        done();
      });
  });
});
