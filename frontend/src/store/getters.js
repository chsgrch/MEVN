export const getters = {
    getAllVacancies: state => state.vacancies,
    getAllFeedback: state => state.feedback,
    // ---
    // isLoggedIn: state => !!state.token,
    // authStatus: state => state.status,
    // userRole: state => state.role,
    // userName: state => state.userName,

    // ------------- by cookie -------------- 
    getUserAuthStatus: state => state.userAuthStatus,
    getUserRole: state => state.userRole
  };