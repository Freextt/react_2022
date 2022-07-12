
import {Link,Route,Routes} from "react-router-dom";
import ToDos from "./components/todos/ToDos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Posts from "./components/Posts/Posts";
function App() {
  return (
  <div>
      <div>
          <Link to={'/'}>Home</Link>
          <br/>
          <Link to={'/todos'}>Todos</Link>
          <br/>
          <Link to={'/albums'}>Albums</Link>
          <br/>
          <Link to={'/comments'}>Comments</Link>
      </div>

      <div>
          <Routes>
              <Route path={''}/>
              <Route path={'/todos'} element={<ToDos/>}/>
              <Route path={'/albums'} element={<Albums/>}/>
              <Route path={'/comments'} element={<Comments/>}>
                  <Route path={':id'} element={<Posts/>}/>
              </Route>
          </Routes>
      </div>

  </div>
  )
}

export default App;
