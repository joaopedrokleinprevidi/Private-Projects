import Joi from "joi"
import { errorMessages } from "./errorMessages"
import { throwExceptionValidation } from "./throwExceptionValidation"

export const joiValidateFields = ( schemasToReceive, dataFromInputFields ) => {
    
    const schemas = Joi.object(schemasToReceive).messages(errorMessages)

    const { error } = schemas.validate(dataFromInputFields, { abortEarly: false })

    if ( error ) throwExceptionValidation(error)
}