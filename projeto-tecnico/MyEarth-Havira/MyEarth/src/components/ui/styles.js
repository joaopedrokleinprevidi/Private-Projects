import styled from "styled-components";
import { device, specificDevices } from "../../styles/breakpoints"

export const InputElement = styled.input`
    padding: ${props => props.$padding || "1rem"};
    width: ${props => props.$width || "14rem"};
    height: .7rem;
    border-radius: .7rem;
    margin: ${props => props.$margin || ".1rem 0rem .4rem 0rem"};
    background-color: var(--color-elements);
    color: var(--color-text-contrast);
    font-size: 1.6rem;
    border: 1px solid var(--color-border);
    box-shadow: 1px 1px 1px var(--color-shadow);

    transition: .2s linear;

    &:hover {
        background-color: var(--color-elements-hover);
        box-shadow: var(--color-shadow-hover);
    }

    &:focus {
        outline: 1px solid var(--color-onfocus);
    }

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        font-size: 1.4rem;
        padding: .9rem;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 1.3rem;
        padding: .7rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: portrait) {
        font-size: 1.6rem;
        padding: 1.5rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: landscape) {
        font-size: 1.2rem;
        padding: .7rem;
    }

    @media ${specificDevices.MaxIpadMini} and (${specificDevices.MinIpadMini}) {
        font-size: 1.6rem;
        padding: 1.2rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        margin: 0rem;
        padding: .6rem;
    }
`

export const LabelElement = styled.label`
    font-size: ${props => props.$fontSize || "1.3rem"};
    font-family: var(--font-01-regular);
    margin: ${props => props.$margin || "0rem"};
    color: var(--color-label);

    
    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        font-size: 1.5rem;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 1.2rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) {
        font-size: 1.2rem;
        margin: 0rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: portrait) {
        font-size: 2.3rem;
        margin: .3rem 0rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: landscape) {
        font-size: 1.1rem;
        margin: 0rem;
    }

    @media ${specificDevices.MaxIpadMini} and (${specificDevices.MinIpadMini}) {
        font-size: 1.7rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        font-size: 1.1rem;
    }
`

export const WrapperElement = styled.div`
    display: flex;
    align-items: ${props => props.$alignitems || "flex-start"};
    justify-content: ${props => props.$justifycontent || "center"};
    flex-direction: ${props => props.$flexdirection || "column"};
    padding: ${props => props.$padding || ".2rem"};
    margin: ${props => props.$margin || ".1rem"};
    width: ${props => props.$width};
    height: ${props => props.$height};

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        margin: 0rem;
    }
`

export const LogoApp = styled.img`
    background-image: url("../../assets/icons/logoMyEarth.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: ${props => props.$width || "3.2rem"};
    height: ${props => props.$height || "3.2rem"};

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        width: 2.2rem;
        height: 2.2rem;
    }
`

export const TittleH1Element = styled.h1`
    font-size: 3.2rem;
    color: var(--color-text-contrast);
    padding: ${props => props.$padding || "1.2rem"};

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 2.8rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        font-size: 2.2rem;
    }
`

export const TittleH2Element = styled.h2`
    font-size: 2.2rem;
    color: var(--color-text-contrast);
    padding: ${props => props.$padding || "1.2rem"};

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 2rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        display: none;
    }
`

export const ParagraphElement = styled.p`
    font-size: ${props => props.$pFontSize || "1.7rem"};
    text-align: ${props => props.$textAlign || "left"};
    text-shadow: 1px 1px 1px var(--color-shadow);
    color: var(--color-text-01);
    margin: ${props => props.$margin || ".3rem"};

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        font-size: 2rem;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 1.3rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: portrait) {
        font-size: 2.3rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: landscape) {
        font-size: 1.2rem;
    }

    @media ${specificDevices.MaxIpadMini} and (${specificDevices.MinIpadMini}) {
        font-size: 2rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        font-size: 1.5rem;
        margin: 0rem .5rem;
    }
`

export const ButtonElement = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.$margin || "0rem"};
    padding: ${props => props.$padding || "1.6rem"};
    font-size: ${props => props.$fontSize || "1.6rem"};
    width: ${props => props.$width || "16rem"};
    height: ${props => props.$height || "0rem"};
    background-color: var(--color-buttons);
    border: 1px solid var(--color-border);
    border-radius: ${props => props.$borderRadius || ".9rem"};
    color: white;
    transition: .2s linear;
    cursor: pointer;

    &:hover {
        background-color: var(--color-buttons-hover);
        transition: .2s linear;
    }

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        font-size: 1.6rem;
        padding: 1.6rem;
        width: 17rem;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 1.3rem;
        padding: 1.2rem;
        width: 16rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: portrait) {
        font-size: 1.9rem;
        padding: 2.7rem;
        margin-top: 2rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: landscape) {
        font-size: 1.1rem;
        width: 10rem;
        padding: 1.2rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        font-size: 1.4rem;
        padding: 1rem;
    }
`

export const FormElement = styled.form`
    display: flex;
    align-items: ${props => props.$alignitems || "center"};
    justify-content: ${props => props.$justifycontent || "center"};
    flex-direction: ${props => props.$flexdirection || "column"};
    padding: .2rem;

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: portrait) {
        margin: 3rem 0rem;
    }

    @media ${specificDevices.MaxIpadMini} and (${specificDevices.MinIpadMini}) {
        margin: 0rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        margin: 0rem;
    }
`

export const HRElement = styled.hr`
    width: ${props => props.$width || "90%"};
    margin: auto;
    text-align: center;
`