import { Map } from 'immutable';
import { CHANGE_TOP_MUSIC_LIST } from './constans'

const initStore = Map({
    classifyList: []
});

function reducer(state = initStore, action) {
    console.error('获取数据', action)
    switch (action.type) {
        case CHANGE_TOP_MUSIC_LIST:
            return state.set("classifyList", action.classifyList);
        default:
            return state;
    }
}
export default reducer;
