import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

let usersReducer = (state = [],action) => {
     switch (action.type){
         case "Load_Users":
             return [...action.payload];
         case  "Filter_Users":
             return [...state.filter(users => users[action.payload.field] == action.payload.value)]//дозволяє динамічно звернутися до якоїсь філди

         default:
             return state;
     }
}
let userReducer = (state = null,action) => {
    switch (action.type){
        case "Load_User":
            let  users = action.payload.data;//з ячейки дата тягнуться юзери оскільки ми вже їх підтягнули
            return users.find(user => user.id == action.payload.id);
        default:
            return state;
    }
}
let postsReducer = (state= [], action) => {
        switch (action.type){
            case "Load_Posts":
                return [...action.payload];
            default:
                return state;
        }
}
let reducers = combineReducers({users:usersReducer,posts: postsReducer,user: userReducer});
let store = createStore(reducers);

// let store = createStore((state = {users:[],posts:[],user:null,post:null},action)=>{
//   switch (action.type){
//       case "Load_Users":
//           return {...state,users: action.payload};//в стейті лежать юзери та пости але в даному випадку тягнуться юзери
//
//       case "Load_Posts":
//           return {...state,posts: action.payload};//тут тягнуться пости
//
//       case "Get_User":
//           return {...state,user : state.users.find(item => item.id == action.payload)};
//
//       case "Get_Post":
//           return {...state,post : state.posts.find(item => item.id == action.payload)};
//       default:
//           return state;
//   }
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}> {/*сховище глобального стану*/}
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
