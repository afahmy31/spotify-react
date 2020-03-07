import axiosLib from 'axios';

const token = process.env.REACT_APP_SPOTIFY_TOKEN;
var instance = axiosLib.create({
    headers: { 'Authorization': `Bearer ${token}` }, "Content-Type": "application/json",
})
export default instance;