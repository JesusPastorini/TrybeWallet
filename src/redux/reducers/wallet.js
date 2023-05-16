const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
};

const Wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'SET_LOADING':
    return {
      ...state,
      isLoading: action.payload,
    };
  default:
    return state;
  }
};

export default Wallet;
