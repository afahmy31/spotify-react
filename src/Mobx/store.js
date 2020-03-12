import { observable, action, decorate } from "mobx";

class Store {
    playlistId = "";

    changePlaylist(newId) {
        this.playlistId = newId;
    }
    clearPlaylistId() {
        this.playlistId = "";
    }
}

decorate(Store, {
    playlistId: observable,
    changePlaylist: action,
    clearPlaylistId: action
});
var store = window.store  = new Store();

export default store;