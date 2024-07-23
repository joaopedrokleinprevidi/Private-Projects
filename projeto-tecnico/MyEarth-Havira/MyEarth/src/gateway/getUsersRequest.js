const getUsersRoute = "https://jsonplaceholder.typicode.com/users"

export const getUsersRequest = async () => {
    
    const init = {
        method: "get",
        headers: { "Content-Type": "application/json" }
    }

    const response = await fetch(getUsersRoute, init)

    if ( response.ok ) return response.json()
    
    throw "Get users request failed" 

}