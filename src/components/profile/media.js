import Tuits from "../tuits";
import {useEffect, useState} from "react"
import * as service from "./../../services/media-service";

const MyMedia = () => {
    const [mediaTuits, setMediaTuits] = useState([]);
    const findMediatuits = () => {
        service.findAllTuitsWithMedia("my").then((tuits) => setMediaTuits(tuits))
    }

useEffect(findMediatuits, [])

return (
    <div>
        <h2>Media</h2>
        <Tuits tuits={mediaTuits} refreshTuits={findMediatuits}/>
    </div>
);
};
export default MyMedia;