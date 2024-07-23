import { AsideViewListImageElement } from "./styles"

export const AsideViewListImage = ( props ) => {
    return (
        <>
            <AsideViewListImageElement src={ props.src } { ...props } />
        </>
    )
}