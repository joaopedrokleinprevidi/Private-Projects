import { FormElement } from "./styles"

export const Form = (props) => {
    return ( 
    <FormElement {...props}> 
        { props.children } 
    </FormElement>) }