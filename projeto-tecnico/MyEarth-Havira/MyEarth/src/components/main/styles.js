import styled from "styled-components"
import { device } from "../../styles/breakpoints"

export const MainElement = styled.main`
    display: flex;
    flex-direction: ${props => props.$flexDirection};
    width: 100%;
    height: 100%;

    @media ${device.MinMobile} and (${device.MaxMobile}) {
        flex-direction: column;
    }
`