import { describe, expect } from 'vitest'

import { mount } from '@vue/test-utils'


import App from '@/App.vue'

describe('App', () => {
    it("if logged in is false, do not show logout button", () => {
        const wrapper = mount(App);
        expect(wrapper.find("button").isVisible()).toBe(false);
    });

    it("if logged in, show logout button", () => {
        expect(true).toBe(false);
    });
});
toBe(false)


