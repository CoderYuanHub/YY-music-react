import { Map } from 'immutable';
import { 
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_URL
 } from './constans';

const initStore = Map({
    currentSong: {},
    currentSongUrl: {}

});

function reducer(state = initStore, action) {
    switch (action.type) {
        case CHANGE_CURRENT_SONG: 
            return state.set("currentSong", action.currentSong);
        case CHANGE_CURRENT_SONG_URL:
            return state.set("currentSongUrl", action.currentSongUrl);
        default:
            return state;
    }
}

export default reducer;