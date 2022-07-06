import {useEffect, useState} from "react";
import {carService} from "../services";
import Car from "./Car";
import CarForm from "./CarForm";

export default Cars;
function Cars(){
   let [cars,setCars] =  useState([]);
   useEffect(()=> {
       carService.getAll().then(({data}) => setCars(data));
   },[])
    const addCar = (car) =>{
       setCars([...cars,car]);
    }
    return(
        <div>
            <CarForm addCar={addCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}