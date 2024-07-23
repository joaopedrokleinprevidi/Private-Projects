import { ParagraphElement } from "./styles"

export const Paragraph = ( props ) => {
    return ( 
        <ParagraphElement { ...props }> 
            { props.text } 
        </ParagraphElement>
    )
}