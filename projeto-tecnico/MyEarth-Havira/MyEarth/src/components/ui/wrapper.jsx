import { WrapperElement } from "./styles"

export const Wrapper = ( props ) => {
    return (
        <WrapperElement { ...props }>
            { props.children }
        </WrapperElement>
    )
}