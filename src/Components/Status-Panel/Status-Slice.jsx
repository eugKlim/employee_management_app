import { createSlice } from '@reduxjs/toolkit';

export const getUserStatusFromLocalStorage = () => {
  let getStatusIcons = JSON.parse(localStorage.getItem('userStatus'));
  if (
    getStatusIcons !== null &&
    getStatusIcons !== undefined &&
    Object.keys(getStatusIcons).length !== 0
  ) {
    return JSON.parse(localStorage.getItem('userStatus'));
  }
  return {};
};

const StatusSlice = createSlice({
  name: 'statusSlice',
  initialState: {
    toggleUserStatus: {},
    userStatuses: {},
    isOpenStatusPanel: false,
    selectedUserId: null,
  },
  reducers: {
    setUserStatuses: (state, action) => {
      state.userStatuses = action.payload;
    },
    toggleUserStatus: (state, action) => {
      const { userId, icon } = action.payload;
      const userIcons = state.userStatuses[userId] || [];
      const newIcons = userIcons.includes(icon)
        ? userIcons.filter((i) => i !== icon)
        : [...userIcons, icon];
      state.userStatuses[userId] = newIcons;
    },
    openPanel: (state, action) => {
      state.isOpenStatusPanel = true;
      state.selectedUserId = action.payload;
    },
    closePanel: (state) => {
      state.isOpenStatusPanel = false;
      state.selectedUserId = null;
    },
  },
});

export const { setUserStatuses, toggleUserStatus, openPanel, closePanel } =
  StatusSlice.actions;
export default StatusSlice.reducer;
