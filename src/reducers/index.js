import { combineReducers } from 'redux';

// Aqui serão importados os reducers
// import meuReducer from './meuReducer';
import login from './login';

// Aqui são combinados o reducers
export default combineReducers({
    // Lista de reducers    
    login,    
});