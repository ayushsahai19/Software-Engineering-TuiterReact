import React from "react";
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    height: '500px',
    width: '500px',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//const TuitStats = ({tuit, likeTuit, dislikeTuit, bookmarkTuit, unbookmarkTuit = () => {}}) => {
const Home = ({openModal = () => {} }) => {
  const location = useLocation();
  const { uid } = useParams();
  const { tid } = useParams();
  let subtitle;
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [fileUrl, setFileUrl] = useState()
  const [file, setFile] = useState();
  const userId = uid;
  const findTuits = () =>
      service.findAllTuits()
          .then(tuits => {
            setTuits(tuits)
          });
  useEffect(() => {
    let isMounted = true;
    findTuits()
    return () => { isMounted = false; }
  }, []);

  const createTuit = () => {

    const formData = new FormData()
    formData.append("image", file)
    formData.append("tuit", tuit)

    service.createTuit('my', formData)
        .then(findTuits)
        .then(() => {
          setFile('')
          setFileUrl(null)
        })
  }


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setFile('')
    setFileUrl(null)
  }

  function submitHandle(){
    setIsOpen(false);
  }

  function handleChange(e) {
    setFile(e.target.files[0])
    setFileUrl(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className="ttr-home">
        <div className="border border-bottom-0">
          <h4 className="fw-bold p-2">Home Screen</h4>
          <div className="d-flex">
            <div className="p-2">
              <img className="ttr-width-50px rounded-circle"
                   src="../images/nasa-logo.jpg" />
            </div>
            <div className="p-2 w-100">
            <textarea id="text"
                      onChange={(e) =>
                          setTuit(e.target.value)}
                      placeholder="What's happening?"
                      className="w-100 border-0"></textarea>
              <div className="row">
                <div className="col-10 ttr-font-size-150pc text-primary">
                  <i className="fas fa-portrait me-3"></i>
                  <i className="far fa-gif me-3"></i>

                  <i className="fa-solid fa-image me-3" onClick={openModal} data-testid="test-imageButton"></i>
                  <i className="far fa-bar-chart me-3"></i>
                  <i className="far fa-face-smile me-3"></i>
                  <i className="far fa-calendar me-3"></i>
                  <i className="far fa-map-location me-3"></i>
                </div>

                <img src={fileUrl} width={"40%"} height={"40%"} />
                <br />
                <div className="col-2">
                  <a onClick={() => {
                    createTuit();
                  }
                  }
                     className={`btn btn-primary rounded-pill fa-pull-right
                                fw-bold ps-4 pe-4`}>

                    Tuit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tuits tuits={tuits}  refreshTuits={findTuits} />
        <Modal
            isOpen={modalIsOpen}
            onClose={closeModal}
            style={customStyles}
            contentLabel="Image Upload">
          <i className="fa-solid fa-circle-xmark fa-lg" onClick={closeModal} style={{ float: "right" }}></i>

          <input type="file" onChange={handleChange} />
          <br />
          <br />

          <img src={fileUrl} width={"40%"} height={"40%"} />
          <br /><br />

          <button onClick={submitHandle} className="btn btn-outline-primary m-1">
            Submit
          </button>
        </Modal>
      </div>
  );
};
export default Home;