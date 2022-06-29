//import logo from './logo.svg';
//import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {getUserPosts} from "./services/user.service.api";
import {useState} from "react";
function App() {
    let [posts,setPosts] = useState([]);
    const liftUp = (id) => {
        getUserPosts(id).then(({data}) => {
            setPosts([...data]);
        });
    }
  return (
    <div>
      <Users liftUp={liftUp}/>
        <Posts item = {posts}/>
    </div>
  );
}

export default App;
