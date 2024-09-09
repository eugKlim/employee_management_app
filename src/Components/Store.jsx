import { configureStore } from '@reduxjs/toolkit';

import EmployeeReducer from './Employee-list/Employee-Slice';
import StatusReducer from './Status-Panel/Status-Slice';

const Store = configureStore({
  reducer: {
    employee: EmployeeReducer,
    statusSlice: StatusReducer,
  },
});

export default Store;
