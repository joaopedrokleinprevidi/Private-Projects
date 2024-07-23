import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"

import { WrapperDoubleButton, Aside, Wrapper, Paragraph, Form, Label, Input, Button } from "../../../components"
import { addUser } from "../../../libs"
import { useAddUser } from "../../../hooks";

export const AsideAddUsersPage = ( generateRandomIdUserService, validationNewUser ) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {
        name, setName,
        city, setCity,
        email, setEmail,
        lat, setLat,
        lng, setLng
        } = useAddUser()


    const handleCreateNewUser = () => {

        const id = generateRandomIdUserService()
        const user = {
            id,
            name,
            email,
            address: {
                city,
                geo: {
                    lat,
                    lng
                }
            }
        }

        validationNewUser(user)
        dispatch(addUser(user))
        toast.success("Viajante enviado a missão com sucesso!")
        navigate("/viewUsers")

    }


    return (
        <Aside >
            <Paragraph text="Envie viajantes para uma missão de reconhecimento de território!" $textAlign="center" $fontSize="1.5rem"/>
        
            <WrapperDoubleButton/>

            <Form>
                <Wrapper>
                    <Label htmlFor="Nome" text="Nome"/>
                    <Input type="text" id="Nome" onChange={(event) => {setName(event.target.value)}}/>
                </Wrapper>

                <Wrapper>
                    <Label htmlFor="Cidade" text="Cidade"/>
                    <Input type="text" id="Cidade" onChange={(event) => {setCity(event.target.value)}}/>
                </Wrapper>

                <Wrapper>
                    <Label htmlFor="Email" text="Email"/>
                    <Input type="email" id="Email" placeholder="exemplo@gmail.com" onChange={(event) => {setEmail(event.target.value)}}/>
                </Wrapper>

                <Wrapper>
                    <Label htmlFor="Latitude" text="Latitude"/>
                    <Input type="text" id="Latitude" placeholder="-29" onChange={(event) => {setLat(event.target.value)}} />
                </Wrapper>

                <Wrapper>
                    <Label htmlFor="Longitude" text="Longitude"/>
                    <Input type="text" id="Longitude" placeholder="-51" onChange={(event) => {setLng(event.target.value)}} />
                </Wrapper>

                <Button type="button" text={"Enviar Viajante"} onClick={handleCreateNewUser}/>
            </Form>

        
        </Aside>
    )
}