export default
class userService {
    /*@ngInject*/
    constructor($http, $q, config, $state) {
        this.http = $http;
        this.q = $q;
        this.config = config;
        this.state = $state;

        this.newObj = {};
    }

}
