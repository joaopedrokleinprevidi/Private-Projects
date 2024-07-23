import styled from "styled-components"
import { device, specificDevices } from "../../styles"

export const HeaderElement = styled.header`
    width: calc(100vw - 10rem);
    height: 4rem;
    background-color: var(--color-body);
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 1rem 5rem;

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        margin: 1.5rem 0rem;
        padding: 1rem;
        width: calc(100vw - 2rem)
    }

    @media ${specificDevices.MaxAsusZenbookFold} and (${specificDevices.MinAsusZenbookFold}) {
        padding: 1rem;
        height: 2rem;
        margin: 1rem;
    }

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        padding: .5rem .2rem;
        margin: 0rem;
        height: 2rem;
        width: 100vw;
        align-items: center;
        justify-content: center;
    }
`