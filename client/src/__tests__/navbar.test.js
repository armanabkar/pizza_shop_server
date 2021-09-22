import { mount } from "@vue/test-utils";
import Navbar from "../components/Navbar.vue";

describe("Test Home View", () => {
  const wrapper = mount(Navbar);

  it("has no data", () => {
    expect(Navbar.data).toBe(undefined);
  });

  test("is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });

  it("renders navbar's title", () => {
    expect(wrapper.html()).toContain("Pizza Pizza");
  });

  it("renders links", () => {
    expect(wrapper.html()).toContain("Menu");
    expect(wrapper.html()).toContain("About");
    expect(wrapper.html()).toContain("Admin Panel");
  });
});
