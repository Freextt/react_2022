import {axiosService} from "./axios.services";
import {urls} from "../urls";

export const carService = {
    getAll:() => axiosService.get(urls.cars),
    create:(car) => axiosService.post(urls.cars.car),
    updateById:(id,car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id) => axiosService.delete(`${urls.cars}/${id}`)
}