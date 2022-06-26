
import {useState,useEffect} from "react";
import User from "./User";
function  Users(){
    let [users,setUsers] = useState([]);
    let [user,setUserDetails] = useState({});
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value =>{
                setUsers(value);
            })
    },[])
    const userDetails = (user) =>
    {
          setUserDetails(user);
    };
return(
    <div>
        {users.map(user => <User
            user ={user}
            userDetails={userDetails}
        />)}
        {user && <div>{user.email}   {user.username}</div>}

    </div>);
}
export default Users;