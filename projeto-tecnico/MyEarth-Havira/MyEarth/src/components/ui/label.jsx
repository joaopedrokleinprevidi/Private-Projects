import { LabelElement } from "./styles";

export const Label = ( props ) => {
    return (
        <LabelElement { ...props } > 
            { props.text } 
        </LabelElement>
    )
}

