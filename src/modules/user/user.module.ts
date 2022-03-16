import UserService from "./services/user.service";
import {Module} from "medusa-extender";
import {User} from "./entities/user.enitity";
import UserRepository from "./repositories/user.repository";

@Module({
    imports: [
        User,
        UserRepository,
        UserService,
    ],
})
export class UserModule {}
