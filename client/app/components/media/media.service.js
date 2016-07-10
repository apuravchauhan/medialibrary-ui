export default class MediaService {
  /*@ngInject*/
  constructor($http,$q,config) {
    this.$http = $http;
    this.$q = $q;
    this.config = config;
  }

}

