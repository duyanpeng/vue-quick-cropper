import { shallowMount,mount } from '@vue/test-utils'
import QuickCropper from '../src/VueQuickCropper.vue'
import {expect} from 'chai'


describe('QuickCropper', () => {
  it('renders a div', () => {
    const wrapper = mount(QuickCropper, {
      attachToDocument: true
    })
    expect(wrapper.contains('div')).to.be.true
  });

})
