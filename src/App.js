import React, {Component} from 'react';
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

class App extends Component {
  render() {
    return (
        <div>
          <Comments/>
            <Posts/>
        </div>
    );
  }
}

export default App;
