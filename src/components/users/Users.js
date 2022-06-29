import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.service.api";
export default Users;
function Users({liftUp}){
    let [users,setUsers] = useState([]);
  useEffect(()=>{
     getUsers().then(value => setUsers([...value.data]));
  }, [])
    return(
        <div>
            {
                users.map(user => <User
                    key = {user.id}
                    user={user}
                    liftUp={liftUp}
                />)
            }
        </div>
    )
}