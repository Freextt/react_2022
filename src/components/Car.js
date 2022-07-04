import css from './Car.module.css'
export default function Car({car}){
    let {id,model,price,year} = car;
    return(
        <div className={css.Car}>
            <div className={css.container}>
             <div>ID: {id}</div>
             <div>MODEL: {model}</div>
             <div>PRICE: {price}</div>
             <div>YEAR: {year}</div>
            </div>
            <div className={css.tools}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}