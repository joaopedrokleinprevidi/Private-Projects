import { AsideElement } from "./styles"

export const Aside = ( props ) => {
    return (
        <AsideElement { ...props }>
            { props.children }
        </AsideElement>
    )
}
