import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import Button from "../button.vue";

describe("test button component", () => {
    it("click the clickEvent", async() => {
        const wrapper = shallowMount(Button);
        wrapper.find('button').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('div').text()).toMatch('1')
    })
})