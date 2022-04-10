import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
                             withCredentials: true
                         });

export const findAllTuitsWithMedia = (userId) =>

    api.get(`${USERS_API}/${userId}/tuitmedia`)
        .then(response => response.data);




