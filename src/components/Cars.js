import {useEffect, useState} from "react";
import {carService} from "../services";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () =>{
   const [cars,setCars] =  useState([]);
   const[carUpdate,setCarUpdate]=useState(null);
   useEffect(()=> {
       carService.getAll().then(({data}) => setCars(data));
   },[])
    const addCar = (car) =>{
       setCars([...cars,car]);
    }
    const deleteCar = async (id) => {
       await carService.deleteById(id);
       const result = [...cars];
       const index = result.findIndex(value => value.id === id);
       if (index !== -1){
           result.splice(index,1)
           setCars(result)
       }
    }
    const updateCar = (car) => {
        const res = [...cars];
        const find = res.find(value => value.id === setCarUpdate.id);

        if (find) {
            Object.assign(find, car)
            setCars(res)
            setCarUpdate(null)
        }
    }
    return(
        <div>
            <CarForm addCar={addCar} carUpdate={carUpdate} updateCar={updateCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} deleteCAr={deleteCar} setCarUpdate={setCarUpdate}/>)}
        </div>
    )
}
export {Cars};