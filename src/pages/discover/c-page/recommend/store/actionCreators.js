import { 
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUM,
    CHANGE_TOP_NEW_LIST,
    CHANGE_TOP_SURGE_LIST,
    CHANGE_TOP_ORIGIN_LIST,
    CHANGE_IN_SINGER
} from './constans';
import {
    getTopBanners,
    getHotRecommends,
    getNewAlbum,
    getTopList,
    getTopSinger
} from '@/services/recommend';

// 获取banners的Actions
const changeTopBannerAction = (res) => ({
    type: CHANGE_TOP_BANNERS,
    topBanners: res.banners
})
// 获取recommend 的Action
const changeHotRecommendAction = (res) => ({
    type: CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
});

// 改变新碟上架action
const changeNewAlbumAction = (res) => ({
    type: CHANGE_NEW_ALBUM,
    newAlbums: res.albums
});

// 改变入驻歌手action
const changeInSingerAction = (res) => ({
    type: CHANGE_IN_SINGER,
    inSingerList: res.artists
});

// redux中的榜单
const changeTopNewListAction = (res) =>({
    type: CHANGE_TOP_NEW_LIST,
    topNewInfo: res.playlist
});
const changeTopSurgeListAction = (res) => ({
    type: CHANGE_TOP_SURGE_LIST,
    topSugerInfo: res.playlist
})
const changeTopOriginListAction = (res) => ({
    type: CHANGE_TOP_ORIGIN_LIST,
    topOriginInfo: res.playlist
})

// 获取的轮播图
const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
}

// 获取入场歌手数据
const getInSIngerAction = () => {
    return dispatch => {
        getTopSinger(5).then(res => {
            console.error(res);
            dispatch(changeInSingerAction(res));
        })
    }
}

// 通过redux-thunk进行拦截请求
const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}
// 获取新碟上架数据
const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
        })

    }
}
// 获取榜单数据
const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx) {
                // 新歌榜
                case 0:
                    dispatch(changeTopNewListAction(res));
                    break;
                // 原创榜
                case 2:
                    dispatch(changeTopOriginListAction(res));
                    break;
                // 飙升榜
                case 3:
                    dispatch(changeTopSurgeListAction(res));
                    break;
                default:
                    break;
            }
        })
    }
}


export {
    getTopBannerAction,
    getHotRecommendAction,
    getNewAlbumAction,
    getTopListAction,
    getInSIngerAction
}