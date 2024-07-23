import { TittleH2Element } from "./styles"

export const TittleH2 = ( props ) => {
    return ( 
        <TittleH2Element { ...props }> 
            { props.text } 
        </TittleH2Element>
    )
}