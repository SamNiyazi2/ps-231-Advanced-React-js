
// 08/02/2020 01:18 am - SSN - [20200802-0018] - [002] - Jest - React testing libray

import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from '../CheckboxWithLabel';


// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
beforeAll( ()=> {

    let d = new Date();

    console.log ( '\r\n'.repeat(20));
    console.log ( 'CheckboxWithLabel.test.js');
    console.log ( d.toLocaleTimeString() );
    console.log ( '\r\n'.repeat(2));
    
});

afterEach(cleanup);

it('ChcekboxWithLabel changed the text after click', () => {


    const { queryByLabelText, getByLabelText, getByText } = render(

        <CheckboxWithLabel labelOn="On" labelOff="Off" />

    );


    // Does not work
    //expect(queryByLabelText(/off/ig)).toBeTruthy();
    expect(getByLabelText(/off/ig)).toBeTruthy();
 
    // Does not work
    // fireEvent.click(getByLabelText(/off/i));
    fireEvent.click(getByLabelText(/off/ig));


    // Does not work
    // expect(queryByLabelText(/on/i)).toBeTruthy();
    expect(getByText(/on/ig)).toBeTruthy();


});

