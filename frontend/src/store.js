import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

//storing to state from local storage
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

//store
const initialState = { userLogin: { userInfo: userInfoFromLocalStorage } };
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
