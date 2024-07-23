import { ButtonElement } from "./styles"

export const Button = ( props ) => {
    return ( 
        <ButtonElement { ...props }> 
            { props.text } 
        </ButtonElement>
    ) 
}