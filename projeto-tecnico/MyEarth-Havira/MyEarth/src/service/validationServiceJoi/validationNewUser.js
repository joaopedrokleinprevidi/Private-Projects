import { joiValidateFields } from "../../libs/joiValidation"
import { newUserSchema } from "../../libs/joiValidation/schemas"

export const validationNewUser = ( data ) => {
    joiValidateFields(newUserSchema, data)
}