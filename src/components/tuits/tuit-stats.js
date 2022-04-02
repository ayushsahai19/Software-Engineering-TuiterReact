import React from "react";

const TuitStats = ({tuit, likeTuit, dislikeTuit = () => {}}) => {
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats &&
          <span className="ttr-stats-replies">{tuit.stats.replies}</span>
          }
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats &&
          <span className="ttr-stats-retuits">{tuit.stats.retuits}</span>
          }
        </div>
        <div className="col">
          <span className="fa-solid fa-thumbs-up" onClick={() => likeTuit(tuit)}>
              <span className="ttr-stats-likes">{tuit.stats && tuit.stats.likes}</span>
          </span>
        </div>
        <div className="col">
        <span onClick={() => dislikeTuit(tuit)}>
          {
            tuit.stats && tuit.stats.dislikes > 0 &&
            <i className="far fa-thumbs-down fa-solid me-1" />
          }
          {
            tuit.stats && tuit.stats.dislikes <= 0 &&
            <i className="far fa-thumbs-down me-1"/>
          }
          {tuit.stats && tuit.stats.dislikes}
          </span>
      </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;