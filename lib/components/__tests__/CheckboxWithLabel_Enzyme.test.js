
// 08/02/2020 05:50 am - SSN - [20200802-0534] - [001] - Jest - Ezyme

// https://jestjs.io/docs/en/tutorial-react#enzyme

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';


// Added
import adapter from 'enzyme-adapter-react-16.3';
enzyme.configure({ adapter: new adapter() });


let testFileName = 'CheckboxWithLabel_Enzyme.test';

beforeAll(() => {

    let d = new Date();

    console.log(` 
    
            ${'\r\n'.repeat(10)}
            ${testFileName}  - 1 - beforeAll
            ${d.toLocaleTimeString()} 
            ${'\r\n'.repeat(4)}
        `);

});




test('Enzme: CheckboxWithLabel changes the text after click', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOff='Off' labelOn='On' />);

    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');


});

