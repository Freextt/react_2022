import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux/slices/car.slice";


const CarForm = () => {
      const {reset,register,handleSubmit,setValue} =  useForm();
      const {createCar} =useSelector(state => state.cars);
      const dispatch = useDispatch();
      useEffect(()=>{
          if(createCar){
             setValue('model',createCar.model)
             setValue("price", createCar.price)
             setValue('year',createCar.year)
          }
      })
    const submit = async (data) => {
        if (createCar) {
            await dispatch(carActions.updateById({id: createCar.id, car: data}))
        } else {
            await dispatch(carActions.create({car: data}))
        }

        reset()
    };
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Create</button>
            </form>
        </div>
    )
}
export {CarForm};