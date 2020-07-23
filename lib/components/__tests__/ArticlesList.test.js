

// 07/21/2020 12:23 pm - SSN - [20200721-1205] - [001] - M03-P09 - Jest snapshot testing


import React from 'react';
import ArticlesList from '../ArticlesList';

// 07/23/2020 02:29 am - SSN - [20200723-0122] - [001] - M05-P03 - Shallow rendering wit Enzyme

// import renderer from 'react-test-renderer';
import enzyme  from 'enzyme';
import { shallow } from 'enzyme';

import adapter from 'enzyme-adapter-react-16.3';

enzyme.configure({ adapter: new adapter() });


describe('ArticlesList', () => {


    it('renders correctly', () => {

        const testProps = {
            articles: {
                a: {
                    id: 'a',
                    title: 'Title 101',
                    body: 'Body 101',
                    date: ''
                },
                b: {
                    id: 'b',
                    title: 'Title 102',
                    body: 'Body 102',
                    date: ''
                }
            }

            // 07/23/2020 02:30 am - SSN - [20200723-0122] - [002] - M05-P03 - Shallow rendering wit Enzyme
            ,
            // store: {
            //     lookupAuthor: jest.fn(() => { return { firstName: 'SomeFirstName' }; })
            // }

        };


        // 07/23/2020 02:30 am - SSN - [20200723-0122] - [003] - M05-P03 - Shallow rendering wit Enzyme

        // const testTree = renderer.create(
        const wrapper = shallow(
            <ArticlesList

                {...testProps}
            />

            // 07/23/2020 02:30 am - SSN - [20200723-0122] - [003] - M05-P03 - Shallow rendering wit Enzyme
            //).toJSON();
        );

        console.log('ArticlesList.test.js - wrapper');
        console.log(...wrapper);
        console.log( 'wrapper.props():');
        console.log( wrapper.props());


        // expect(testTree.children.length).toBe(2);
        // expect(testTree).toMatchSnapshot();

        // Valid option
        // expect(wrapper.props().children.length).toBe(2);
        expect(wrapper.find('Article').length).toBe(2);
        expect(wrapper).toMatchSnapshot();


    });


});
