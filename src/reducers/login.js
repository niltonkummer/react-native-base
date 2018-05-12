export default function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN': 
            // FAZ LOGIN
            return [ ...state, action.payload ];
        default:
            return state;            
    }
}