import { shallowMount } from "@vue/test-utils";
import Navigation from "../Navigation";


const factory = () => {
  return shallowMount(Navigation, {
    stubs: {
        'nuxt-link': true,
        'any-other-child': true
    }
  });
};

describe("Navigation", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    // expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});