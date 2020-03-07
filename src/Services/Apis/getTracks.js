import axios from './axios-instance';

const getTracks = async (playlistId) => {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
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

export default getTracks;