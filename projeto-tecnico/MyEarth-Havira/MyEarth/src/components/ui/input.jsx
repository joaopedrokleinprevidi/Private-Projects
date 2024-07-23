import { InputElement } from "./styles";

export const Input = ( props ) => {
    return (
        <InputElement 
            type={ props.type || 'text' } 
            placeholder={ props.placeholder || '' }
            { ...props }
        />
    )
}

