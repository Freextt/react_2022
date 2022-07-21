import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

export default function App(){

  return(
      <div>
          <p><Link to={"/"}>Home</Link></p>
          <p><Link to={"/users"}>Users</Link></p>
          <p><Link to={"/posts"}>Posts</Link></p>
          <Routes>
             <Route path={'users'} element={<Users/>}/>
              <Route path={'posts'} element={<Posts/>}/>
          </Routes>
      </div>
  )
}
