import {useEffect, useState} from "react";
import {carService} from "../services";
import Car from "./Car";

export default Cars;
function Cars(){
   let [cars,setCars] =  useState([]);
   useEffect(()=> {
       carService.getAll().then(({data}) => setCars(data));
   },[])
    return(
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}