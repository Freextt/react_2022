import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


const CarForm = () => {
      const {reset,register,handleSubmit,setValue} =  useForm();
      const dispatch = useDispatch();
      useEffect(()=>{
          if(create){

          }
      })
    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
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
            </form>
        </div>
    )
}
export {CarForm};