
// 07/22/2020 10:50 pm - SSN - [20200722-2153] - [002] - Testing context
// https://reactjs.org/docs/context.html#dynamic-context


import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#ffffff',
    },
    dark: {
        foreground: '#ffffff',
        background: '#000000',
    },
};




// export const ThemeContext = React.createContext(themes.dark // default value);

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    theme: themes.dark, toggleTheme: () => { },
});





