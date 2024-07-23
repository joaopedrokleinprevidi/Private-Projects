import { TittleH1Element } from "./styles"

export const TittleH1 = ( props ) => {
    return ( 
        <TittleH1Element { ...props }>
            { props.text } 
        </TittleH1Element>
    )
}