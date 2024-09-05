const { mount } = require('@vue/test-utils');
const {expect} =  require('expect');
const { nextTick } = require('vue');
const Counter = require('../src/components/Counter.js');

// Mock SVGElement globally
if (typeof global.SVGElement === 'undefined') {
  global.SVGElement = function() {};
}

describe('Counter', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Counter);
    });

  it('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it('increment the count when the button is clicked', () => {
    expect(wrapper.vm.count).toBe(0);

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.count).toBe(1);
  });

  it('presents the current count', async () => {
    // const countSpan = wrapper.find('.count').text(); // Extract the text content
    // expect(countSpan).toBe('0'); // Compare the text content with the expected value
    // wrong ////////////////////////
    // expect(wrapper.find('.count').html()).toContain('0');

    // wrapper.find('button').trigger('click');

    // expect(wrapper.find('.count').html()).toContain('1');

    // right

     // Check the initial count
     expect(wrapper.find('.count').text()).toBe('0');

     // Trigger a button click to increment the count
     wrapper.find('button').trigger('click');
 
     // Wait for the DOM to update
     await nextTick();
 
     // Check if the count has incremented
     expect(wrapper.find('.count').text()).toBe('1');
  });
});

// mocha --require test/setup.js test/*.spec.js