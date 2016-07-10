/**
 * Created by deepanshu on 30/3/16.
 */

export default {
    // @ifdef dev
    apiHost: 'http://localhost:8082/api/v1/',
    // @endif

    // @ifdef prod
    apiHost: 'http://pgmis.paytm.com/api/v1/',
    // @endif

    // @ifdef qa
    apiHost: '/api/v1/'
    // @endif

}