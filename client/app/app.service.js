let self;
export default
class interceptorService {
    /*@ngInject*/
    constructor($q, $rootScope) {
        self = this;
        self.q = $q;
        self.scope = $rootScope;
        self.statusCode = '';
        self.config = {
            '401': {
                code: 401,
                modalTitle: 'Access Denied',
                modalBody: 'You are not authorised.',
                modalFooter: 'OK'
            },
            '403': {
                code: 403,
                modalTitle: 'Access Denied',
                modalBody: 'You are not authorised.',
                modalFooter: 'OK'
            },
            '503': {
                code: 503,
                modalTitle: 'Remote Communication Error',
                modalBody: 'There is some issue in remote communication.',
                modalFooter: 'OK'
            },
            '502': {
                code: 502,
                modalTitle: 'Remote Communication Error',
                modalBody: 'You are not authorised.',
                modalFooter: 'OK'
            },
            '500': {
                code: 500,
                modalTitle: 'Something Went Wrong',
                modalBody: 'Something Went Wrong',
                modalFooter: 'Close'
            },
            '400': {
                modalBody: []
            },
            '-1': {
               code: -1,
                modalTitle: 'Internet Issue',
                modalBody: 'Please check your network',
                modalFooter: 'Close'
            }
        }
    }

    request(config) {
        self.scope.$broadcast('clearError');
        return config;
    }

    requestError(rejection) {
        return self.q.reject(rejection);
    }

    response(response) {
       
        return response;
    }

    responseError(rejection) {
        let q = self.q;

        if (rejection.status != '400' && rejection.status != '-1') {
            self.scope.$broadcast('errorFound', self.config[rejection.status]);
        }
        else {
            self.config[rejection.status].modalBody = [];
            let error;
            for (let key in rejection.data) {
                error = rejection.data[key];
            }
            self.config[rejection.status].modalBody.push(error);
            self.scope.$broadcast('badRequest', self.config[rejection.status]);
        }
        return q.reject(rejection);
    }
}
