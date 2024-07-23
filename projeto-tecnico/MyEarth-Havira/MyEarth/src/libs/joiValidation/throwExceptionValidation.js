import toast from "react-hot-toast"

export const throwExceptionValidation = ( errorReceived ) => {
    const errors = errorReceived.details.map(( detail ) => toast.error(detail.message))
    console.log(errorReceived)
    throw errors
}