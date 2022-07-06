import {useForm} from "react-hook-form";
import {carService} from "../services";

export default function CarForm({addCar}){
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm({mode:'all'});
    const submit = (newCar) => {
        const {data} = carService.create(newCar);
        addCar(data);
        reset();
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model', {
                    required:true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇ]{1,20}$/)
                })}/>
                <input type="number" placeholder={'price'} {...register('price', {
                    valueAsNumber:true,
                    required:true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="number" placeholder={'year'} {...register('year', {
                    valueAsNumber:true,
                    required:true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>Save</button>
            </form>
            <div>
                {errors.model && <div>Only alphabetic min 1 and max 20</div> }
                {errors.price && <div>Min 0 and Max 1000000</div>}
                {errors.year && <div>Min 1990 year Max current year</div>}
            </div>
        </div>
    )
}