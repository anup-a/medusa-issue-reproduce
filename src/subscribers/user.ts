class UserSubscriber {
    constructor({ welcomeService, eventBusService }) {
        eventBusService.subscribe("user.password_reset", this.handleUserInvited);
    }

    handleUserInvited = (data) => {
        console.log(data)
        console.log("Hello......")
    };
}

export default UserSubscriber;
