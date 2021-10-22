// immutable优化数据性能
import { Map } from 'immutable';
import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM } from './constans';
// 初始化仓库值
const initStore = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbum: []
})

function reducer(store = initStore, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            return store.set("topBanners", action.topBanners);
        case CHANGE_HOT_RECOMMEND:
            return store.set("hotRecommends", action.hotRecommends);
        case CHANGE_NEW_ALBUM:
            return store.set("newAlbum", action.hotRecommends);
        default:
            return store;
    }
}

export default reducer;