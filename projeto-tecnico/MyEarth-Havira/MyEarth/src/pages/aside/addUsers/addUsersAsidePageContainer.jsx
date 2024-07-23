import { AsideAddUsersPage } from "./addUsersAsidePage"
import { generateRandomIdUserService } from "../../../service"
import { validationNewUser } from "../../../modules"

export const AsideAddUsersPageContainer = () => {
    return AsideAddUsersPage(generateRandomIdUserService, validationNewUser)
}