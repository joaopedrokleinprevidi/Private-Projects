import { AsideViewListButtonElement } from "./styles"

export const AsideViewListButton = ( props ) => {
    return ( 
        <AsideViewListButtonElement { ...props }>
            { props.children }
        </AsideViewListButtonElement>
    )
}