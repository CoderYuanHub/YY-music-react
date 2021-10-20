import { Map } from 'immutable';
import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from './constans'
// 初始化仓库值
const initStore = Map({
    topBanners: [],
    hotRecommends: []
})

function reducer(store = initStore, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            return store.set("topBanners" , action.topBanners);
        case CHANGE_HOT_RECOMMEND:
            return {...store, hotRecommends: []};
        default:
            return store;
    }
}

export default reducer;