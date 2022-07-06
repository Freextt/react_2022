import css from './Car.module.css'
const Car = ({car,deleteCAr,setCarUpdate}) => {
    const {id,model,price,year} = car;
    return(
        <div className={css.Car}>
            <div className={css.container}>
             <div>ID: {id}</div>
             <div>MODEL: {model}</div>
             <div>PRICE: {price}</div>
             <div>YEAR: {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={()=> setCarUpdate(car)}>Edit</button>
                <button onClick={()=> deleteCAr(id)}>Delete</button>
            </div>
        </div>
    )
}
export {Car};