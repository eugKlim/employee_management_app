import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: number;
  image: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
    zipcode: number;
  };
}

interface IImage {
  thumbnailUrl: string;
}

interface IEmployeeState {
  users: IUser[];
  filtredUsers: IUser[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  search: string;
  error: string | null | undefined;
}

export const getUsersAndImages = createAsyncThunk<IUser[]>(
  'axios/getUsersAndPhotos',
  async (_, thunkAPI) => {
    try {
      const usersResponse = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      const imagesResponse = await axios.get<IImage[]>(
        'https://jsonplaceholder.typicode.com/photos'
      );

      return usersResponse.data.map((user: IUser, index: number) => ({
        ...user,
        image: imagesResponse.data[index]?.thumbnailUrl,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('Неизвестная ошибка');
      }
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
  } as IEmployeeState,
  reducers: {
    searchUser: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.filtredUsers = state.users.filter((user) => {
        return user.name.toLowerCase().includes(state.search.toLowerCase());
      });
    },
    filterBtns: (state, action: PayloadAction<IUser[]>) => {
      state.filtredUsers = action.payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getUsersAndImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getUsersAndImages.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.status = 'success';
          state.users = action.payload;
          state.filtredUsers = action.payload;
        }
      )
      .addCase(getUsersAndImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { searchUser, filterBtns } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
