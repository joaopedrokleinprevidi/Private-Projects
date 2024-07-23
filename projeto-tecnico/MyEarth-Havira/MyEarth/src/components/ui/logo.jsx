import { LogoApp } from "./styles"

export const Logo = ( props ) => {
    return ( <LogoApp src={ props.$src } { ...props } />)
}