import { HeaderElement } from "./styles"
import { Wrapper, Logo, TittleH1, TittleH2, HR } from "../ui"
import logoMyEarth from "../../assets/icons/logoMyEarth.png"

export const Header = () => {
    return (
        <>
            <HeaderElement>
                <Wrapper $flexdirection="row" $alignitens="center">
                    <Logo $src={logoMyEarth}/>
                    <TittleH1 text="MyEarth" $padding="0rem 1.5rem"/>
                </Wrapper>

                <TittleH2 text="Conecte-se com a Terra!"/>

            </HeaderElement>
            
            <HR $width="100%"/>
        </>
    )
}