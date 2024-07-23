import { useState } from "react"

export const useAddUser = () => {

    const [ name, setName ] = useState('')
    const [ city, setCity ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ lat, setLat ] = useState('')
    const [ lng, setLng ] = useState('')

    return {
        name, setName,
        city, setCity,
        email, setEmail,
        lat, setLat,
        lng, setLng
    }
    
}