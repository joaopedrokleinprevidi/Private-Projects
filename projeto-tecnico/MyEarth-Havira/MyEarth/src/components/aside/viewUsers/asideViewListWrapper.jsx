import { AsideViewListWrapperElement } from "./styles"

export const AsideViewListWrapper = (props) => {
    return (
        <AsideViewListWrapperElement {...props}>
            { props.children }
        </AsideViewListWrapperElement>
    )
}