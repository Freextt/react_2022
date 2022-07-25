import {urls} from "../urls/Urls";
import {axiosService} from "./axios.service";



const carServices = {
    getAll:() => axiosService.get(urls.cars),
    deleteById:(id) => axiosService.delete(`${urls.cars}/${id}`),
    create:(car) => axiosService.post(urls.cars, car)
}
export {carServices};