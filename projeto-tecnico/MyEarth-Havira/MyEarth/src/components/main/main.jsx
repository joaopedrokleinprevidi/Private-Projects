import { MainElement } from "./styles"

export const Main = ( props ) => {
    return ( 
        <MainElement { ...props }> 
            { props.children } 
        </MainElement>
    )
}