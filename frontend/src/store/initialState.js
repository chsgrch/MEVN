export const state = {
    //./modules/vacancies
    vacancies: [],
    //./modules/user
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    role: "",
    userName: "",
    //./modules/feedback
    feedback: []
};