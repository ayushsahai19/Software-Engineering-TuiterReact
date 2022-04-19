import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BOOKMARKS_API = `${BASE_URL}/api/bookmark`;
const UNBOOKMARK_API = `${BASE_URL}/api/unbookmark`;

const api = axios.create({
  withCredentials: true
});

export const viewAllTuitsBookmarkedByUser = (userId) =>
    api.get(`${BOOKMARKS_API}/tuit/${userId}`)
        .then(response => response.data);

export const unBookmarkTuit = (tid, uid) =>
api.delete(`${UNBOOKMARK_API}/${tid}/${uid}`)
    .then(response => response.data);

export const bookmarkTuit = (tid, uid) =>
    api.put(`${BOOKMARKS_API}/${tid}/${uid}`)
        .then(response => response.data);