import React from 'react';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Test on AddCategory Component', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Should be shown correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should change the input box', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';

        input.simulate('change', { target: { value } });
    });

    test('Should not post info on Submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Should post info on Submit', () => {
        wrapper.find('input').simulate('change', { target: { value: 'Testing components' } });
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});