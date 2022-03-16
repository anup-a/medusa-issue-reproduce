import { Service } from "medusa-extender";
import { EntityManager } from "typeorm";
import EventBusService from "@medusajs/medusa/dist/services/event-bus";
import { UserService as MedusaUserService } from "@medusajs/medusa/dist/services";
import {UserRepository} from "@medusajs/medusa/dist/repositories/user";

type ConstructorParams = {
    manager: EntityManager;
    userRepository: typeof UserRepository;
    eventBusService: EventBusService;
};

@Service({ override: MedusaUserService })
export default class UserService extends MedusaUserService {
    private readonly manager: EntityManager;
    private readonly userRepository: typeof UserRepository;
    private readonly eventBus: EventBusService;
    constructor(private readonly container: ConstructorParams) {
        super(container);
        this.manager = container.manager;
        this.userRepository = container.userRepository;
        this.eventBus = container.eventBusService;
        this.eventBus.subscribe(MedusaUserService.Events.PASSWORD_RESET, (...args) => {
            console.log(args)
        })
    }
}
