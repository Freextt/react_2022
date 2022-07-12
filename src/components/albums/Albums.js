import {useEffect, useState} from "react";
import {fetchServices} from "../../services/fetch.services";

function Albums(){
    let[albums,setAlbums] = useState([]);
    useEffect(()=>{
        fetchServices.getAlbums().then(value => setAlbums([...value]));
    },[])
    return(
        <div>
            {
                albums.map(item => <div>{item.id}-{item.title}</div>)
            }
        </div>
    )
}
export default Albums;