
function User({user,userDetails}){
    return(<div>
        {user.id} {user.name}
         <button onClick={()=>{
             userDetails(user);
         }}>Details</button>
    </div>);
}
export default User;