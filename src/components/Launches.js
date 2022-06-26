import {useEffect, useState} from "react";

export default Launches;
function Launches(){
    let [launches,setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setLaunches(value);
            })
    },[]);
    return(
        <div>
            {launches.filter(item => item.launch_year !== '2020').map(value => <div>
                {value.mission_name} ---
                {value.launch_year}
                <img src={value.links.mission_patch_small} alt=""/>
            </div>)
            }
        </div>
    )
}