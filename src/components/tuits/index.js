import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";
import * as bookmarkService from "../../services/bookmarks-service"

const Tuits = ({tuits = [], refreshTuits}) => {
    const likeTuit = (tuit) =>
        likesService.userLikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e));
    const dislikeTuit = (tuit) => dislikesService.userTogglesTuitDislikes("me", tuit._id)
    .then(refreshTuits).catch(e => alert(e));
    
    const bookmarkTuit = (tuit) =>
        bookmarkService.bookmarkTuit(tuit._id,"me")
            .then(refreshTuits)
            .catch(e => alert(e));

            const unbookmarkTuit = (tuit) =>
            bookmarkService.unBookmarkTuit(tuit._id,"me")
                .then(refreshTuits)
                .catch(e => alert(e));

    
            const deleteTuit = (tid) =>
        service.deleteTuit(tid)
            .then(refreshTuits);

    return (
        <div>
          <ul className="ttr-tuits list-group">
            {
              tuits.map && tuits.map(tuit =>
                  <Tuit className="the-tuit"
                        key={tuit._id}
                        deleteTuit={deleteTuit}
                        likeTuit={likeTuit}
                        dislikeTuit={dislikeTuit}
                        bookmarkTuit={bookmarkTuit}
                        unbookmarkTuit={unbookmarkTuit}
                        tuit={tuit}/>)
            }
          </ul>
        </div>
      );
}

export default Tuits;