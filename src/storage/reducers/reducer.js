const setStorage = (state, { storage }) => {
  if (storage) {
    state.storage = storage;
    state.isSet = true;
  }
  return { ...state };
};

const setIntl = (state, { intl }) => {
  if (intl) {
    state.intl = intl;
  }
  return { ...state };
};

const setError = (state, { error }) => {
  if (error && error.text) {
    state.error = error;
  }
  return { ...state };
};

const setToken = (state, { token }) => {
  if (token) {
    state.token = token;
  }
  return { ...state };
};

const setSelectedLanguage = (state, { selected }) => {
  if (selected) {
    state.selectedLanguage = selected;
  }
  return { ...state };
};

const setReload = (state, { reload }) => {
  if (reload === false || reload === true) {
    state.reload = reload
  }
  return { ...state }
};

const setRefresh = (state, { refresh }) => {
  if (refresh === false || refresh === true) {
    state.refresh = refresh
  }
  return { ...state }
};

const nullError = (state) => {
  state.error = { text: '', code: 0 };
  return { ...state };
};

const nullToken = (state, { token }) => {
  state.token = '';
  nullError(state, {});
  return { ...state };
};

const actions = {
  setStorage,
  setIntl,
  setError,
  setToken,
  setSelectedLanguage,
  setReload,
  setRefresh,
  nullError,
  nullToken,
};

export const reducer = (state, action) => {
  if (action && action.type && actions[action.type]) {
    return actions[action.type](state, action);
  }
  return { ...state };
};
