export const SET_EMAIL = 'SET_EMAIL';
// export const REQUEST_STARTED = 'REQUEST_STARTED';
// export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
// export const REQUEST_FAILED = 'REQUEST_FAILED';

// action creators - criam e retornam uma ação no redux
export const createEmail = (payloadForm) => ({
  type: SET_EMAIL,
  payload: payloadForm,
});

export const setCurrencies = (currencies) => ({
  type: 'SET_CURRENCIES',
  payload: currencies,
});

export const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(setLoading(true)); // Inicia o carregamento

  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(setCurrencies(currencies));
      dispatch(setLoading(false)); // Finaliza o carregamento
    })
    .catch((error) => {
      console.log(error);
      dispatch(setLoading(false)); // Finaliza o carregamento em caso de erro
    });
};
