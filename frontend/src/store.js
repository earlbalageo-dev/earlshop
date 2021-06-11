import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
