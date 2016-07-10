class MHeaderController {
    /*@ngInject*/
    constructor(userService, $location, $window) {
        this.location = $location;
        this.window = $window;
        this.userService = userService;
     

      
    }

}

export default MHeaderController;
