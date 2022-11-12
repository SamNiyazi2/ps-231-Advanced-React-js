

// 08/02/2020 02:49 pm - SSN - [20200802-1443] - [001] - Jest - Ezyme - Shallow Rendering API

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Article from '../Article';

// Added
import adapter from 'enzyme-adapter-react-16.3';
enzyme.configure({ adapter: new adapter() });





// 08/01/2020 09:23 pm - SSN - [20200801-2022] - [001] - M08-P02 - Continuous integration and test coverage



beforeAll(() => {


    let testFileName = 'Article.test';

    let d = new Date();

    console.log(` 
    
            ${'\r\n'.repeat(10)}
            ${testFileName}  - 1 - beforeAll
            ${d.toLocaleTimeString()} 
            ${'\r\n'.repeat(4)}
        `);


});

// afterAll(() => console.log('Article.test - 1 - afterAll'));
// beforeEach(() => console.log('Article.test - 1 - beforeEach'));
// afterEach(() => console.log('Article.test - 1 - afterEach'));



describe('Article', () => {


    beforeAll(() => console.log('Article.test - 2 - beforeAll'));
    // afterAll(() => console.log('Article.test - 2 - afterAll'));
    // beforeEach(() => console.log('Article.test - 2 - beforeEach'));
    // afterEach(() => console.log('Article.test - 2 - afterEach'));


    test('should run this test 1 of 2', () => {

        expect(true).toBe(true);

    });

    test('should run this test 2 of 2', () => {


        expect(true).toBe(true);

    });


});





// 08/02/2020 02:49 pm - SSN - [20200802-1443] - [001] - Jest - Ezyme - Shallow Rendering API

describe('<Article/>', () => {





    it('contains four divs', () => {

      //  jest.mock('../storeProvider', () => ({ connect: () => C => p => <C {...p} dispatch={mockDispatch} /> }));
        jest.mock('../storeProvider', () => { });

        // jest.mock('../storeProvider', () => {

 

        //     return {
        //         hocFunction: function (hocConf) {

                    
        //             return function (component) {
        //                 component.defaultProps = {
        //                     ...component.defaultProps, 
        //                 };
        //                 component.store = {
        //                     lookupAuthor: () => {
                                
        //                     }
        //                 };
        //                 return component;
        //             };
        //         }

        //     };

        // });

        let article = {};

        const wrapper = shallow(
            <Article
                article={article}

            />);


    });



});


