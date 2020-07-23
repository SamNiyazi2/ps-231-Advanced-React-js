
// 07/22/2020 10:54 pm - SSN - [20200722-2153] - [003] - Testing context

// 

import React from 'react';

import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        
        let props = this.props;
        let theme = this.context; 
        
        console.log ( 'themed-buttons');
        console.log ( 'this.props:');
        console.log ( this.props);
        console.log ( 'this.context:');
        console.log ( this.context);

        return (
            <button
                {...props}
                style={{ backgroundColor: theme.background , color: theme.foreground}}
            />
        );
    }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;

