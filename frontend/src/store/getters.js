export const getters = {
    getAllVacancies: state => state.vacancies,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userRole: state => state.role,
    getAllFeedback: state => state.feedback,
    userName: state => state.userName
  };