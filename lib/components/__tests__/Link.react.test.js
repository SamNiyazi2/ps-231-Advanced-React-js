
// 08/01/2020 10:37 pm - SSN - [20200801-2201] - [002] - Jest - Documenation training

import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {


    const component = renderer.create(
        <Link page="http://bing.com">Bing</Link>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();



    // Manually trigger the callback
    tree.props.onMouseEnter();

    // Re-rendering
    component.toJSON();
    expect(tree).toMatchSnapshot();



    // Manually trigger the callback
    tree.props.onMouseLeave();
    
    // Re-render
    component.toJSON();
    expect(tree).toMatchSnapshot();



});

