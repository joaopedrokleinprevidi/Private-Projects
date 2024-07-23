import { getUsersRequest } from "../../gateway/getUsersRequest"

export const getUsersService = async () => {
    
    try {
        return await getUsersRequest()
    }

    catch ( error ) {
        console.error(error)
        return []
    }
    
}