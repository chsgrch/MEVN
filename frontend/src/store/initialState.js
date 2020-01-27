import {getUserStatus, getUserRole} from '../utils/auth'

export const state = {
    //./modules/vacancies
    vacancies: [], //+
    //./modules/user
    // status: localStorage.getItem("status") || "", //+
    // token: localStorage.getItem("token") || "",
    // user: {},
    // role: localStorage.getItem("role") || "",
    // userName: localStorage.getItem("userName") || "",
    //./modules/feedback
    feedback: [], //+

    // ------------- beteween cookie --------------
    userAuthStatus: getUserStatus()=='success' ? true : false || '', //+ localStorage.getItem('userAuthStatus')
    userRole: getUserRole(), //localStorage.getItem('userRole') || ''//()=>getUserRole(), //+
};