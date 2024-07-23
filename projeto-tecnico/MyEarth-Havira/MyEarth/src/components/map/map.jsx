import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup   } from 'react-leaflet'
import { Icon } from 'leaflet';

import "./styles.scss"
import { HR } from "../../components";
import iconUser from "../../assets/icons/user/profile-user.png"

export const MapWrapper = () => {
    
    const { users } = useSelector(state => state.users)

    const customIcon = new Icon({
        iconUrl: `${iconUser}`,
        iconSize: [38, 38]
    })

    return (

        <MapContainer center={[-15.79951954989404, -47.87882391037201]} 
        zoom={12}
        minZoom={3}
        maxZoom={23}
        className="leaflet-container"
        maxBoundsViscosity={1.0}
        touchZoom={true}
        >

            <TileLayer
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>' 
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />

            {
                users.map( user => (
                    
                    <Marker key={user.id} position={[user.address.geo.lat, user.address.geo.lng]} icon={customIcon} >
                        <Popup >
                            <p><strong>Localização: </strong> 
                                {Math.floor(user.address.geo.lat) + " " + Math.floor(user.address.geo.lng)}
                            </p>
                            <HR $width="100%"/>
                            <p><strong>Nome: </strong> 
                                {user.name}
                            </p>
                            <HR $width="100%"/>
                            <p><strong>Origem: </strong> 
                                {user.address.city}
                            </p>
                            <HR $width="100%"/>
                            <p><strong>Contato: </strong>
                                {user.email}
                            </p>
                        </Popup>
                    </Marker>
                ))
            }

        </MapContainer>
    )
}
