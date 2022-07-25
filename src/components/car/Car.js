import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices/car.slice";

export default function Car({car}){
    const {id,model,price,year} = car;
    const dispatch = useDispatch();
    return(
        <div>
            <p>ID:{id}</p>
            <p>Model:{model}</p>
            <p>Price:{price}</p>
            <p>Year:{year}</p>
            <button onClick={() =>
            {
             dispatch(carActions.remove({id}))
            }
            }>Delete</button>
        </div>
    )
}