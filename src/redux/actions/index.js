export const SET_EMAIL = 'SET_EMAIL';

// action creators - criam e retornam uma ação no redux
export const createEmail = (payloadForm) => ({
  type: SET_EMAIL,
  payload: payloadForm,
});
