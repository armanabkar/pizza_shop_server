import { mount } from "@vue/test-utils";
import Menu from "../views/Menu.vue";
import "isomorphic-fetch";

describe("Test Menu View", () => {
  const wrapper = mount(Menu);

  test("is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });
});
