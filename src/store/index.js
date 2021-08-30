import {createStore} from 'vuex'
import login from "@/store/login";
import alert from "@/store/alert";

export default createStore({
    modules: {login, alert}
})
