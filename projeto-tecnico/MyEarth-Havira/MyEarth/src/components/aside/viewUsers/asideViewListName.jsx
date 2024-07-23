import { AsideViewListNameElement } from "./styles"

export const AsideViewListName = ( props ) => {
    return (
        <>
            <AsideViewListNameElement { ...props }> 
                { props.text } 
            </AsideViewListNameElement>
        </>
    )
}