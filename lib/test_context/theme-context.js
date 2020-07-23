
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


// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    theme: themes.dark, toggleTheme: () => { },
});

