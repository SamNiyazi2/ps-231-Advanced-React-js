

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
                },
                b: {
                    id: 'b',
                }
            }
            ,
            articleActions: {
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
