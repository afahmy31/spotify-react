import axios from '../axios-instance';

const getPlaylists = async (offset) => {
    const url = `https://api.spotify.com/v1/browse/featured-playlists?country=EG&limit=5&offset=${offset}`;
    try {
        const res = await axios.get(url);
        return {
            success: true,
            body: res.data
        }
    } catch (err) {
        return {success: false, message: err.response.data.error}
    }
}

export default getPlaylists;