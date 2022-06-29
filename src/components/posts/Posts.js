export default Posts;
function Posts({item}){
    return(
        <div>
            {
                item.map(value => <div key={value.id} >{value.id} {value.title}</div>)
            }
        </div>
    )
}