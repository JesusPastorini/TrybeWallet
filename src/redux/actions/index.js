export const createEmail = (payloadForm) => ({
  type: 'SET_EMAIL',
  payload: payloadForm,
});

export const setCurrencies = (currencies) => ({
  type: 'SET_CURRENCIES',
  payload: currencies,
});

export const createExpenses = (paramExpense, exchangeRates) => ({
  type: 'SET_EXPENSES',
  paramExpense: { ...paramExpense, exchangeRates },
});

export const deleteExpense = (id) => ({
  type: 'DELETE_EXPENSE',
  payload: id,
});

export const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const fetchExpenses = (paramExpense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      dispatch(createExpenses(paramExpense, data));
    });
};

export const fetchCurrencies = () => (dispatch) => {
  dispatch(setLoading(true)); // Inicia o carregamento

  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data).filter((curr) => curr !== 'USDT');
      dispatch(setCurrencies(currencies));
      dispatch(setLoading(false)); // Finaliza o carregamento
    })
    .catch((error) => {
      console.log(error);
      dispatch(setLoading(false)); // Finaliza o carregamento em caso de erro
    });
};
