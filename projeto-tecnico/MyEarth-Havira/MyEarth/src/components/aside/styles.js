import styled from "styled-components"
import { ButtonElement } from "../ui/styles"
import { device, specificDevices } from "../../styles/breakpoints" 

export const DoubleButtonElement = styled(ButtonElement)`
    border-radius: 0rem;
    border-top-right-radius: ${props => props.$borderTopRightRadius || "0rem"};
    border-bottom-right-radius: ${props => props.$borderBottomRightRadius || "0rem"};
    border-top-left-radius: ${props => props.$borderTopLeftRadius || "0rem"};
    border-bottom-left-radius: ${props => props.$borderBottomLeftRadius || "0rem"};
    width: 40%;
`

export const AsideElement = styled.aside`
    display: flex;
    flex-direction: ${props => props.$flexdirection || "column"};
    padding: ${props => props.$padding || "1rem 0rem 0rem 0rem"};
    margin: ${props => props.$margin || "0rem"};
    height: calc(100vh - 90px);
    width: ${props => props.$width || "33%"};
    border-right: ${props => props.$borderRight || "1px solid #eee"};

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        height: 694px;
    }
 
    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        height: 505px;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: portrait) {
        height: 1250px;
        width: 40%;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) and (orientation: landscape) {
        height: 500px; 
    }

    @media ${specificDevices.MaxAsusZenbookFold} and (${specificDevices.MinAsusZenbookFold}) {
        height: 1200px;
    }

    @media ${specificDevices.MaxIpadAir} and (${specificDevices.MinIpadAir}){
        height: 1090px;
    }

    @media ${specificDevices.MaxIpadMini} and (${specificDevices.MinIpadMini}) {
        height: 930px;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        width: 100%;
        height: max-content;
        margin: .1rem 0rem;
        padding: 0rem;
    }
`