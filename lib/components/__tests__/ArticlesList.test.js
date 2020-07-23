

// 07/21/2020 12:23 pm - SSN - [20200721-1205] - [001] - M03-P09 - Jest snapshot testing


import React from 'react';
import ArticlesList from '../ArticlesList';

import renderer from 'react-test-renderer';

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
            ,
            store: {
                lookupAuthor: jest.fn(() => { return {  firstName: 'SomeFirstName'}; })
            }

        };

        
        const testTree = renderer.create(
            <ArticlesList

                {...testProps}
            />

        ).toJSON();

        expect(testTree).toMatchSnapshot();

        

    });


});
