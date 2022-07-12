import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {Outlet} from "react-router-dom";

function Posts(){
  let[posts,setPosts] = useState([])
    useEffect(()=>{
        fetchServices.getPosts().then(value => setPosts([...value]));
    })
    return(
        <div>
            {posts.map(item => <div>{item.id}-{item.title}</div>)}
            <Outlet/>
        </div>
    )
}
export default Posts;