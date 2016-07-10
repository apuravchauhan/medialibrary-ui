class MLeftbarController {
    /*@ngInject*/
    constructor($location, $state, userService, $rootScope) {
        
        this.location = $location;


        $rootScope.$on('stateChanged', (event, args) => {
            this.currentStateName = args;
        })
    }



}

export default MLeftbarController;
