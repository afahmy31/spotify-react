import { types, onSnapshot } from "mobx-state-tree";

const Store = types.model("Store", {
    playlistId: types.string
})

const store = Store.create({
    playlistId: ""
})

export default store;