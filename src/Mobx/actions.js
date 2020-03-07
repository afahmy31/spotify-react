import { types } from "mobx-state-tree"

const PlaylistId = types
    .model("PlaylistId", {
        playlistId: types.string
    })
    .actions(self => ({
        selectPlaylist() {

        }
    }))
export default PlaylistId;