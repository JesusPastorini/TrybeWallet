const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'SET_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.paramExpense, id: state.expenses.length }],
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

export default wallet;
