import styled from "styled-components"
import { ButtonElement, WrapperElement } from "../../ui/styles"
import { device } from "../../../styles/breakpoints"

const AsideViewListImage = styled.img`
    background-image: url(${props => props.$src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    padding: ${props => props.$padding};
    margin: ${props=> props.$margin};
    width: ${props => props.$width};
    height: ${props=> props.$height};
`

export const AsideViewListIconElement = styled(AsideViewListImage)`
    width: 18px; 
    height: 18px;
    margin-right: 1rem;
`

export const AsideViewListImageElement = styled(AsideViewListImage)`
    width: 126px;
    height: 126px;
    background-color: #ddd;
    border-radius: 50%;

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        width: 115px;
        height: 115px;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        width: 100px;
        height: 100px;
    }

    @media (${device.MaxTablet}) {
        width: 0px;
        height: 0px;
    }
`

export const AsideViewListNameElement = styled.p`
    font-size: 1.3rem;
    color: var(--colo-text-contrast);
    font-family: var(--font-01-regular);

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        font-size: 1.7rem;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: 1.2rem;
    }

    @media ${device.MinTablet} and (${device.MaxTablet}) {
        font-size: 1.4rem;
    }
`

export const AsideViewListParagraphElement = styled.p`
    font-size: 1rem;
    color: var(--color-text-01);
    padding: ${props => props.$padding || "0rem"};
    text-align: center;

    @media ${device.MinLargeScreens} and (${device.MaxLargeScreens}) {
        font-size: 1.2rem;
    }

    @media ${device.MinDesktop} and (${device.MaxDesktop}) {
        font-size: .9rem;
    }
`

export const AsideViewListWrapperElement = styled(WrapperElement)`
    display: block;
    height: 100%;
    margin: 1rem 0rem 0rem 0rem;
    padding: 0rem .3rem;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid var(--color-text-01);
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: var(--color-text-contrast);
        border: 1px solid var(--color-text-01);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-buttons-active);
        border: 1px solid var(--color-text-01);
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        height: 35vh;
    }
`

export const AsideViewListButtonElement = styled(ButtonElement)`
    width: .5rem;
    height: .5rem; 
    font-size: 1.1rem;
    padding: .8rem;
    margin-right: 1rem;
    border-radius: .5rem;
`