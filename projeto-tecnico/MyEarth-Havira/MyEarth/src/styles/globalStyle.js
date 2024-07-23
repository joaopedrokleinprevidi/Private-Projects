import { device } from "./breakpoints";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Poppins-Normal";
    src: url("../../src/assets/fonts/Poppins/Poppins-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Poppins-Bold";
    src: url("../../src/assets/fonts/Poppins/Poppins-Bold.ttf") format("truetype");
}

:root {
    font-size: 15px;
    
    --color-text-contrast: #333;
    --color-text-01: #88878f;
    
    --color-body: #FCFCFC;
    
    --color-label: #222;
    
    --color-elements: #eee;
    --color-elements-hover: #ddd;
    
    --color-shadow: #ddd;
    --color-shadow-hover: #ccc;
    
    --color-border: #F8F4E1;
    
    --color-onfocus: #686D76;
    
    --color-buttons: #333;
    --color-buttons-hover: #222;
    --color-buttons-active: #111;

    --font-01-regular: "Poppins-Regular";
    --font-02-bold: "Poppins-Bold";
}    

* { 
    padding: 0;
    margin: 0;
    font-family: var(--font-01-regular); 
}

body { 
    background-color: var(--color-body);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden; 
    
    @media ${device.MinMobile} and (${device.MaxMobile}) {
        overflow-x: auto;
        overflow-y: hidden;
    }

    }`