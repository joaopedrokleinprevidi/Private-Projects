import { useSelector } from "react-redux"
import { Aside, Paragraph, WrapperDoubleButton, AsideViewListWrapper, AsideViewList } from "../../../components"

export const AsideViewUsersPage = (randomImageUserService) => {

    const { users } = useSelector(state => state.users);

    return (
        <Aside>
            <Paragraph text="Conheça nossos viajantes em missão ao redor do mundo." $textAlign="center" $fontSize="1.5rem" $margin=".3rem 2rem"/>
        
            <WrapperDoubleButton/>
        
            <AsideViewListWrapper>

                {users.map( user => (

                    <AsideViewList 
                    key={user.id}
                    userImage={randomImageUserService()} 
                    name={user.name} 
                    location={Math.floor(user.address.geo.lat) + " " + Math.floor(user.address.geo.lng)}
                    email={user.email} 
                    city={user.address.city} 
                    />
                ))}
                
            </AsideViewListWrapper>
        </Aside>
    )
}