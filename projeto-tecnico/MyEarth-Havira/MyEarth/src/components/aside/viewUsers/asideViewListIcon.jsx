import { AsideViewListIconElement } from "./styles"

export const AsideViewListIcon = ( props ) => {
    return (
        <>
            <AsideViewListIconElement src={ props.src } { ...props } />
        </>
    )
}