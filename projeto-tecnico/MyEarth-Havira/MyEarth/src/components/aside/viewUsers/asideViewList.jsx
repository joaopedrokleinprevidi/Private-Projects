import { AsideViewListImage, AsideViewListName, AsideViewListIcon, AsideViewListParagraph, Wrapper, HR } from "../../index"
import emailIcon from "../../../assets/icons/metadata/email-16px.png"
import homeIcon from "../../../assets/icons/metadata/casa-16px.png"
import locationIcon from "../../../assets/icons/metadata/location-16px.png"

export const AsideViewList = ( props ) => {
    return (
        <>
        <HR $width="95%"/>
        <Wrapper $flexdirection="row" $width="100%" $alignitems="center" $justifycontent="flex-start" $margin="1rem 0rem">
            <AsideViewListImage src={props.userImage}/>
            
            <Wrapper $flexdirection="column" $width="100%" $justifycontent="space-between" $padding="1rem">
                <AsideViewListName text={props.name}/>
                
                <Wrapper $flexdirection="row" $alignitems="center" $padding=".3rem 0rem .3rem 0rem">
                    <AsideViewListIcon src={emailIcon}/>
                    <AsideViewListParagraph text={props.email} />
                </Wrapper>
                
                <Wrapper $flexdirection="row" $alignitems="center" $padding="0rem 0rem .3rem 0rem">
                    <AsideViewListIcon src={homeIcon}/>
                    <AsideViewListParagraph text={props.city}/>
                </Wrapper>

                <Wrapper $flexdirection="row" $alignitems="center" $padding="0rem">
                    <AsideViewListIcon src={locationIcon}/>
                    <AsideViewListParagraph text={props.location}/>
                </Wrapper>
            
            </Wrapper> 
        </Wrapper>
        </>
    )
}