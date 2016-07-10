class NotificationController {
    /*@ngInject*/
    constructor(notificationService) {
        this.name = 'notification';
        this.notificationService = notificationService;
        this.count = 0;
        this.getNotification();
    }

    getNotification() {
        this.message = [];
        setInterval(() => {
            this.notificationService.getDummy()
                .then(data => {
                    this.count = data.length;
                    //this.message = data;

                    //for json response
                    for (var i = 0; i < data.length; i++) {
                        this.message[i] = data[i].message;
                    }
                });
        }, 5000);
    }
}

export default NotificationController;
