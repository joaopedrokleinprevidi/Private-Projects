import { Random } from "random-js";

export const generateRandomIdUserService = () => {

    const random = new Random() 
    const id = random.integer(20, 9999) 

    return id
    
}