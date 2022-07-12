import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";
import {Link, Outlet, useParams} from "react-router-dom";


function Comments(){
    let[comments,setComments] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetchServices.getComments(id).then(value => setComments([...value]));
    },[])
    return(
        <div>
            {comments.map(item => <div>{item.id}-{item.body} -- <span><Link to={item.id.toString()}>Posts</Link></span></div>)}
            <Outlet/>
        </div>
    )
}
export default Comments;