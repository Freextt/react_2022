import {useDispatch, useSelector} from "react-redux";

export default function Users(){
    let {users,user} = useSelector((state) => state);
    let dispatch = useDispatch();
    return(
        <div>
            {user?.username}
            {
                users.map(user => <div key={user.id}>{user.name}
                    <button onClick={()=>{
                        dispatch({type:"Get_user",payload: {data: users,id: user.id}});
                    }
                    }>Details</button></div>)
            }
        </div>
    )
}