import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Home from "./components/Home/Home";

export default function App(){

  return(
      <div>
          <p><Link to={"/"}>Home</Link></p>
          <p><Link to={"/users"}>Users</Link></p>
          <p><Link to={"/posts"}>Posts</Link></p>
          <Routes>
              <Route path={''} element={<Home/>}/>
             <Route path={'users'} element={<Users/>}/>
              <Route path={'posts'} element={<Posts/>}/>
          </Routes>
      </div>
  )
}
