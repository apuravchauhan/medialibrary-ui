export default class libraryService {
    /*@ngInject*/
    constructor($http, $q, config) {
        this.http = $http;
        this.q = $q;
        this.config = config;
    }

    getReportData() {

        let defer = this.q.defer();

        this.http.get(this.config.apiHost + 'media')
            .success(data => defer.resolve(data))
            .error(msg => defer.reject(msg));

        return defer.promise;
    }
}