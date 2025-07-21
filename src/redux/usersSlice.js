import { createSlice } from '@reduxjs/toolkit';
import userData from '../Users.json'; 

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: userData.users, 
    loggedInUser: null,       
  },
  reducers: {
    loginUser(state, action) {
      const { username, password } = action.payload;      
      if (username === 'abdul' && password === 'basidh@17') {
        state.loggedInUser = {
          id: 0,
          username: 'abdul', role: 'admin',
          firstName: 'Abdul',lastName: 'Basidh',email: 'admin@staffapp.com',
        };
      } else {
        state.loggedInUser = null;
      }
    },
    logoutUser(state) {
      state.loggedInUser = null;
    },
    updateUser(state, action) {
      const updated = action.payload;
      state.userList = state.userList.map((user) =>
     user.id === updated.id ? updated : user
      );
    },
    deleteUser(state, action) {
  state.userList = state.userList.filter(user => user.id !== action.payload);
}
  },
});

export const { loginUser, logoutUser, updateUser,deleteUser4} = usersSlice.actions;
export default usersSlice.reducer;