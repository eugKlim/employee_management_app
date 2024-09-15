import { configureStore } from '@reduxjs/toolkit';

import EmployeeReducer from './Employee-list/Employee-Slice.tsx';
import StatusReducer from './Status-Panel/Status-Slice';

const Store = configureStore({
  reducer: {
    employee: EmployeeReducer,
    statusSlice: StatusReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;    
export default Store;
