class InviteSubscriber {
    constructor({ welcomeService, eventBusService }) {
        eventBusService.subscribe("invite.created", this.handleUserInvited);
    }

    handleUserInvited = (data) => {
        console.log(data)
        console.log("Hello......")
    };
}

export default InviteSubscriber;
