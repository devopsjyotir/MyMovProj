const allUsersListReducer = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_ALL_USERS_LIST":
        return (state = action.payload);
      default:
        return state;
    }
  };
  
  export default allUsersListReducer;