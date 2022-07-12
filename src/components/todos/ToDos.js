import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";


function ToDos  () {
    let[todos,setTodos] = useState([]);
    useEffect(()=>{
         fetchServices.getTodos().then(value => setTodos([...value]));
    }, [])
    return(
        <div>
            {
                todos.map(item => <div>{item.id}-{item.title}</div>)
            }

        </div>
    )
}
export default ToDos;