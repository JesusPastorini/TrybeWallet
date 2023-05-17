const INITIAL_STATE = {
  email: '',
};
// Esta constante e usada para pegar conteudo do estado global
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_EMAIL':
    return {
      ...state,
      email: action.payload, // Armazena o email fornecido na ação no estado
    };
  default:
    return state;
  }
};

export default user;
