import { mount } from "@vue/test-utils";
import Home from "../views/Home.vue";

describe("Test Home View", () => {
  const wrapper = mount(Home);

  it("has data", () => {
    expect(Home.name).toBe("Home");
  });

  test("is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders title", () => {
    expect(wrapper.html()).toContain("Pizza Pizza");
  });

  it("renders description", () => {
    expect(wrapper.html()).toContain(
      "Laborum exercitation cupidatat veniam sunt nulla."
    );
  });

  it("renders image", () => {
    const img = wrapper.findAll(".card-img-top");
    expect(img.length).toBe(1);
  });

  it("renders two buttons", () => {
    const button = wrapper.findAll(".btn");
    expect(button.length).toBe(2);
  });
});
