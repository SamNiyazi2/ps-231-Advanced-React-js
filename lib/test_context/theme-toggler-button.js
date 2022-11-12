

import React from 'react';

import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
    // The Theme Toggler Button receives not only the theme  
    // but also a toggleTheme function from the context  


    return (
        <ThemeContext.Consumer>
            {/* {({ theme, toggleTheme }) => (<button */}
            {(optionsPassed) => {

                console.log('them-toggler-button');
                console.log(optionsPassed);

                let theme = optionsPassed.theme;
                let toggleTheme = optionsPassed.toggleTheme;

                return (<button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background, color: theme.foreground }}>
                    Toggle Theme
                </button>
                );

            }
            }
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;


