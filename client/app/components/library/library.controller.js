class LibraryController {
  /*@ngInject*/
  constructor(libraryService,$sce,config) {
   
    this.sce=$sce;
    this.config=config;
    this.libraryService = libraryService;
    this.libraryService.getReportData().then((data)=> {
      this.media = data;
      })
    

  }
  getThumbSrc(media){
    let src = "/public/mediaupload/_thumb_";
    let mName = media.name;
    let ext =".jpg"
    if(mName.indexOf("png", mName.length - 3) !== -1){
      ext = ".png"
    }
    return src+media.res+ext;
  }
  getOriginalSrc(media){
    if(media.typ=='YTB'){
      return "https://www.youtube.com/watch?v="+media.name;
    }
    return "/public/mediaupload/"+media.res+"_"+media.name;
  }
  getEditUrl(media){
   return this.sce.trustAsResourceUrl(this.config.apiHost+'media/'+media.id);
  }


}

export default LibraryController;
