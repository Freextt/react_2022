import {useForm} from "react-hook-form";

export default function CommentsForm(){
    let{register,handleSubmit} = useForm();
    let submit = (obj) => {
        fetch("https://jsonplaceholder.typicode.com/comments",{
            method:"POST",
            body:JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('id')}/>
                <input type="text" {...register('name')}/>
                <input type="text" {...register('body')}/>
                <button>Save</button>
            </form>
        </div>
    )
}