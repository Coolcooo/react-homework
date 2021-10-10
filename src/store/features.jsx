import { createSlice } from '@reduxjs/toolkit';

export const customSlice = createSlice({
  name: 'customer',
  initialState: {
    settings: JSON.parse(localStorage.getItem('settings')) || {
      mainBranch: '',
      repositoryName: '',
      buildCommand: '',
      option: 10,
    },
    isPopup: false,
    errorInBuild: 0,
  },
  reducers: {
    updateSettings: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.settings = action.payload;
    },
    updateRepositoryName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.settings.repositoryName = action.payload;
    },
    updateBuildCommand: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.settings.buildCommand = action.payload;
    },
    updateMainBranch: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.settings.mainBranch = action.payload;
    },
    updateOption: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.settings.option = action.payload;
    },
    updatePopup: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isPopup = action.payload;
    },
    updateErrorInBuild: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.errorInBuild +=
        typeof action.payload === 'number' ? action.payload : 1;
    },
  },
});

export const {
  updateBuildCommand,
  updateMainBranch,
  updateOption,
  updateRepositoryName,
  updateSettings,
  updatePopup,
  updateErrorInBuild,
} = customSlice.actions;

export const updateErrorInBuildAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(updateErrorInBuild());
  }, 1000);
};
