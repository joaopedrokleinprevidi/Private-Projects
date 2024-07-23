import { randomImageUserService } from "../../../service"
import { AsideViewUsersPage } from "./asideViewUsersPage"

export const AsideViewUsersPageContainer = () => {
    return AsideViewUsersPage(randomImageUserService)
}