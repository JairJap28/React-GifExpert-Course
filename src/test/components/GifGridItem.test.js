import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Test in <GifGridItem>', () => {
    const title = 'A Title';
    const url = 'https://localhost/image.png';
    const wrapper = shallow(< GifGridItem title={title} url={url}/>);

    test('Should show the text correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Should have the image src and alt equals to the props', () => {
        const img = wrapper.find('.img__normal');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    }); 

    test('Should have the class animate__fadeIn', () => {
        const div = wrapper.find('.card');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});
