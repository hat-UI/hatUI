import { mount } from "@vue/test-utils";
import Icon from "../icon.vue";

describe("test icon: ", () => {
  const wrapper = mount(Button);
  it("Set the icon props: ", async () => {
    wrapper.setProps({ type: "tick" });
    expect(wrapper.vm.type).toBe("tick");
  });
});
