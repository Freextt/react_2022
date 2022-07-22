import {useDispatch, useSelector} from "react-redux";

export default function Posts(){
    let posts = useSelector(state => state.posts);
    let dispatch = useDispatch();
    return(
        <div>
            {
                posts.map(post => <div key={post.id}>{post.title}
                </div>)
            }
        </div>
    )
}