import { AsideViewListParagraphElement } from "./styles"

export const AsideViewListParagraph = ( props ) => {
    return (
        <>
            <AsideViewListParagraphElement { ...props }> 
                { props.text } 
            </AsideViewListParagraphElement>
        </>
    )
}