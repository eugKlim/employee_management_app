import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserStatuses {
  [userId: string]: string[];
}
interface IStatusState {
  toggleUserStatus: IUserStatuses;
  userStatuses: IUserStatuses;
  isOpenStatusPanel: boolean;
  selectedUserId: string | null;
}

export const getUserStatusFromLocalStorage = (): IUserStatuses => {
  let getStatusIcons = JSON.parse(localStorage.getItem('userStatus')!);
  if (
    getStatusIcons !== null &&
    getStatusIcons !== undefined &&
    Object.keys(getStatusIcons).length !== 0
  ) {
    return getStatusIcons as IUserStatuses;
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
  } as IStatusState,
  reducers: {
    setUserStatuses: (state, action: PayloadAction<IUserStatuses>) => {
      state.userStatuses = action.payload;
    },
    toggleUserStatus: (
      state,
      action: PayloadAction<{ userId: string; icon: string }>
    ) => {
      const { userId, icon } = action.payload;
      const userIcons = state.userStatuses[userId] || [];
      const newIcons = userIcons.includes(icon)
        ? userIcons.filter((i: string) => i !== icon)
        : [...userIcons, icon];
      state.userStatuses[userId] = newIcons;
    },
    openPanel: (state, action: PayloadAction<string>) => {
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
