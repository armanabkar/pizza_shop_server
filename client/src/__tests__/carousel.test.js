import { mount } from "@vue/test-utils";
import Carousel from "../components/Carousel.vue";

describe("Test Home View", () => {
  const wrapper = mount(Carousel);

  it("has no data", () => {
    expect(Carousel.data).toBe(undefined);
  });

  test("is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders renders three images", () => {
    const images = wrapper.findAll(".d-block");
    expect(images.length).toBe(3);
  });
});
