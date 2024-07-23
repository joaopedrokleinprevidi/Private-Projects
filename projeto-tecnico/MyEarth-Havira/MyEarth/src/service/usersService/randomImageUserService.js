import men from "../../assets/icons/user/homem-128px.png"
import woman from "../../assets/icons/user/mulher-128px.png"

export const randomImageUserService = () => {

    const firstImage = men;
    const secondImage = woman;
    
    const randomImage = Math.floor(Math.random() * 2)

    if ( randomImage == 0 ) return firstImage
    else return secondImage

}