export const state = {
    //./modules/vacancies
    vacancies: [],
    //./modules/user
    status: localStorage.getItem("status") || "",
    token: localStorage.getItem("token") || "",
    user: {},
    role: localStorage.getItem("role") || "",
    userName: localStorage.getItem("userName") || "",
    //./modules/feedback
    feedback: []
};