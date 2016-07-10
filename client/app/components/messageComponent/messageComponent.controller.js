class MessageComponentController {
    /*@ngInject*/
    constructor($window, myInterceptorService, $rootScope) {
        this.name = 'messageComponent';
        this.window = $window;
        this.isModal = false;
        this.isAlert = false;

        $rootScope.$on('errorFound', (event, args) => {
            this.isModal = true;
            this.code = args.code;
            this.modalTitle = args.modalTitle;
            this.modalBody = args.modalBody;
            this.modalFooter = args.modalFooter;
            if ($('.modal')) {
                $('.modal').modal('hide');
                $('#errorModal').modal('show');
            }
            else {
                $('#errorModal').modal('show');
            }
        });
        $rootScope.$on('badRequest', (event, args) => {
            this.isAlert = true;
            this.modalBody = args.modalBody;
            if ($('.modal')) {
                $('.modal').modal('hide');
            }
        });

        $rootScope.$on('clearError', (event, args) => {
            this.isAlert = false;
            this.isModal = false;
            this.modalBody = [];
        });
    }

    reload() {
        this.window.location.reload();
    }

    close() {
        $('#errorModal').modal('hide');
    }

}

export default MessageComponentController;
