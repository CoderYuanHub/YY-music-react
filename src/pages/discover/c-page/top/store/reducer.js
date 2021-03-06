import { Map } from 'immutable';

import { CHANGE_TOP_MUSIC_LIST } from './constans'

const initStore = Map({
    topList: []
})


function reducer(store = initStore, action) {

    switch (action.type) {
        case CHANGE_TOP_MUSIC_LIST:
            return store.set("classifyList", action.topMusicList)
        default:
            return store;
    }
}

export default reducer;
