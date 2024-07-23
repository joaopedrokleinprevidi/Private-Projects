import { useNavigate } from "react-router-dom"
import { Wrapper } from "../ui"
import { DoubleButton } from "./asideDoubleButton"

export const WrapperDoubleButton = () => {
    const navigate = useNavigate()

    return (
        <Wrapper 
            $flexdirection="row" 
            $alignitems="center" 
            $justifycontent="center" 
            $margin=".5rem 0rem"
        >

            <DoubleButton 
                $borderTopLeftRadius=".9rem" 
                $borderBottomLeftRadius=".9rem" 
                text="Adicionar" 
                onClick={() => { navigate("/") }}
            />

            <DoubleButton 
                $borderTopRightRadius=".9rem" 
                $borderBottomRightRadius=".9rem" 
                text="Ver todos"
                onClick={() => { navigate("/viewUsers") }}
            />

        </Wrapper>
    )
}