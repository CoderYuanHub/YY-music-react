// immutable优化数据性能
import { Map } from 'immutable';
import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_TOP_NEW_LIST, CHANGE_TOP_SURGE_LIST, CHANGE_TOP_ORIGIN_LIST } from './constans';
// 初始化仓库值
const initStore = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbum: [],

    topNewInfo: {},
    topSugerInfo: {},
    topOriginInfo: {},

})

function reducer(store = initStore, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            return store.set("topBanners", action.topBanners);
        case CHANGE_HOT_RECOMMEND:
            return store.set("hotRecommends", action.hotRecommends);
        case CHANGE_NEW_ALBUM:
            return store.set("newAlbum", action.newAlbums);
        case CHANGE_TOP_NEW_LIST:
            return store.set("topNewInfo", action.topNewInfo);
        case CHANGE_TOP_SURGE_LIST:
            return store.set("topSugerInfo", action.topSugerInfo);
        case CHANGE_TOP_ORIGIN_LIST:
            return store.set("topOriginInfo", action.topOriginInfo);
        default:
            return store;
    }
}

export default reducer;