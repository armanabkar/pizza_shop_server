import { mount } from "@vue/test-utils";
import About from "../views/About.vue";

describe("Test About View", () => {
  const wrapper = mount(About);

  it("has no data", () => {
    expect(About.data).toBe(undefined);
  });

  test("is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders description", () => {
    const description =
      "Deserunt Lorem commodo dolore anim labore aute exercitation.";
    expect(wrapper.html()).toContain(description);
  });

  it("renders phone and address", () => {
    expect(wrapper.html()).toContain("(805) 964-5065");
    expect(wrapper.html()).toContain(
      "4668 Vintage Ranch Ln, Santa Barbara, California(CA), 93110"
    );
  });

  it("renders links to stores", () => {
    const links = wrapper.findAll(".store");
    expect(links.length).toBe(2);
  });
});
