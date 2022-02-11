import React from 'react';
import {ThemeProvider,createTheme,responsiveFontSizes } from '@material-ui/core/styles';
import {green,blue } from '@material-ui/core/colors';
import { useState } from 'react';

const Theme = props =>{
    const {children,darktheme} = props;

    let theme = createTheme({
        palette:{
            type:darktheme? "dark":"light",
            primary:darktheme? green: blue,
            secondary:green
        }
    });
    
    theme = responsiveFontSizes(theme);
    
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}
export const withTheme = Component => {
    return props =>{
        const [darktheme,setDarkTheme]  = useState(false);
        const handleDarkMode = ()=>setDarkTheme(!darktheme);
        return (
            <Theme darktheme={darktheme}>
                <Component {...props} darktheme={darktheme} setDarkTheme={handleDarkMode} />
            </Theme>
        )
    }
}