import Joi from "joi"

export const newUserSchema = {
    id: Joi.number(),
    name: Joi.string().max(35).label("Nome").required(),
    email: Joi.string().email({ tlds: { allow: false }}).label("Email").required(),
    address: {
        city: Joi.string().max(40).label("Cidade").required(),
        geo: {
            lng: Joi.number().label("Longitude").min(-180).max(180).required(),
            lat: Joi.number().label("Latitude").min(-90).max(90).required(),
        }
    }
}
