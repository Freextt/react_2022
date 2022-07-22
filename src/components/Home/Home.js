import {useDispatch} from "react-redux";
import {useEffect} from "react";

export default function Home(){
    let dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type:"Load_Users",payload: value})
            });

           fetch('https://jsonplaceholder.typicode.com/posts')
               .then(value => value.json())
               .then(value => {
                   dispatch({type:"Load_Posts",payload: value})
               })
    },[])
    return(
        <div>
           Home
        </div>
    )
}