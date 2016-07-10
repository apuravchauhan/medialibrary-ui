export default class NotificationService {
    /*@ngInject*/
    constructor($http, $q, config) {
        this.$http = $http;
        this.$q = $q;
        this.config = config;
    }

    getNotification() {
        let deffered = this.$q.defer();
        this.$http.get(`${this.config.apiHost}/dashboard?duration=${duration}&txn=${txn}`)
            .success(data => deffered.resolve(data))
            .error(msg => deffered.reject(msg));
        return deffered.promise;
    }

    getDummy() {
        let deffered = this.$q.defer();
        let data = ['abc', '2nd', '3rd', '4th'];
        let jsonData = [
            {
                message: 'message 1'
            },
            {
                message: 'message 2'
            },
            {
                message: 'message 3'
            },
            {
                message: 'message 4'
            }, {
                message: 'message 5'
            },
            {
                message: 'message 6'
            }, {
                message: 'message 7'
            }
        ]
        /*normal array data*/
        /*deffered.resolve(data);
         return deffered.promise;
         */
        /*json data*/
        deffered.resolve(jsonData);
        return deffered.promise;
    }
}
