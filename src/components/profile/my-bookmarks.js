import Tuits from "../tuits";
import * as service from "../../services/bookmarks-service";
import {useEffect, useState} from "react";

const MyBookmarks = () => {
    const [bookmarkedTuits, setBookmarkedTuis] = useState([]);
    const findTuitsIBook = () =>
        service.viewAllTuitsBookmarkedByUser("me")
            .then((tuits) => setBookmarkedTuis(tuits));
    useEffect(findTuitsIBook, []);
    
    return(
        <div>
            <h2>My Bookmarks</h2>
            <Tuits tuits={bookmarkedTuits} refreshTuits={findTuitsIBook}/>
        </div>
    );
};
export default MyBookmarks;