import {useDispatch, useSelector} from "react-redux";

export default function App(){
  let state = useSelector(state => state);//хук що повертає store,а також є гетером, let [get,set] = useState();
  let dispatch = useDispatch(); //*це умовно кажучи сеттер для вашого стейту стору,приклад у попередньому коментарі*/
  return(
      <div>
          {state} {/*Вивід кутурну з індексу зі значенням 0*/}
        <button onClick={()=>{
            dispatch({type: "Increment", payload: 1}) //функція dispatch передає тип та велью в аргумент action загального store(index.js файл)
        }}>Increment</button>
          <button onClick={()=>{
              dispatch({type: "Decrement", payload: 1})
          }}>Decrement</button>
          <button onClick={()=>{
              dispatch({type: "Reset"})
          }}>Reset</button>
      </div>
  )
}
