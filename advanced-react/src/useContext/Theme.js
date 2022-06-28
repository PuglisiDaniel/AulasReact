import { createContext } from "react";

export const themes = {
    primary: {
        background: '#000',
        color: '#efefef'
    },
    secudary:{
        background: '#efefef',
        color: '#000'
    }
}

export const ThemeContex = createContext(themes.secudary)