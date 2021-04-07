import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test on GifExpertApp component', () => {
    test('Should match with the snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Should show the empty component when it does not have categories', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper.find('EmptySearch').exists()).toBe(true);
    });

    test('Should show a list of categories', () => {
        const categories = ['The Flash', 'Superman'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        expect(wrapper.find('EmptySearch').exists()).toBe(false);
    });
});