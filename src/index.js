import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

let store = createStore((state = {users:[],posts:[]},action)=>{
  switch (action.type){
      case "Load_Users":
          return {...state,users: action.payload};//в стейті лежать юзери та пости але в даному випадку тягнуться юзери

      case "Load_Posts":
          return {...state,posts: action.payload};//тут тягнуться пости

      case "Get_User":
          return state.users.find(item => item.id == action.payload);

      case "Get_Post":
          return state.posts.find(item => item.id == action.payload);
      default:
          return state;
  }
});
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
