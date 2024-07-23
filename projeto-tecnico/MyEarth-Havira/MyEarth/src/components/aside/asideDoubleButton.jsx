import { DoubleButtonElement } from "./styles"

export const DoubleButton = ( props ) => {
    return (
            <DoubleButtonElement { ...props }>
                { props.text }
            </DoubleButtonElement>
    )
}