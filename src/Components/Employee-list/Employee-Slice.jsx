import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsersAndImages = createAsyncThunk(
  'axios/getUsersAndPhotos',
  async () => {
    try {
      const usersResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const imagesResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );

      return usersResponse.data.map((user, index) => ({
        ...user,
        image: imagesResponse.data[index]?.thumbnailUrl,
      }));
    } catch (error) {
      alert('Ошибка получения данных!');
    }
  }
);

const EmployeeSlice = createSlice({
  name: 'employee',
  initialState: {
    users: [],
    filtredUsers: [],
    status: 'idle',
    search: '',
    error: null,
  },
  reducers: {
    searchUser: (state, action) => {
      state.search = action.payload;
      state.filtredUsers = state.users.filter((user) => {
        return user.name.toLowerCase().includes(state.search.toLowerCase());
      });
    },
    filterBtns: (state, action) => {
      state.filtredUsers = action.payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getUsersAndImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsersAndImages.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
        state.filtredUsers = action.payload;
      })
      .addCase(getUsersAndImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { searchUser, filterBtns } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
