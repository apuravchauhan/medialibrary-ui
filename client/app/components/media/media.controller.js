/*@author Apurav Chauhan*/
class MediaController {
  /*@ngInject*/
  constructor(mediaService,config) {
    this.apiHost = config.apiHost;
    this.mediaService = mediaService;

  }

}
export default MediaController;