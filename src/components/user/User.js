export  default  function User({user,liftUp}){
    const onclick = () => {
        liftUp(user.id);
    }
    return(
        <div>
           ID: {user.id},
           Name: {user.name},
            Username: {user.username},
            Email: {user.email}
            <button onClick={onclick}>
                Posts
            </button>
        </div>
    )
}