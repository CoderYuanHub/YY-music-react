import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM } from './constans';
import { getTopBanners, getHotRecommends, getNewAlbum } from '@/services/recommend'

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
    hotRecommends: res.albums
})

const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
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
            console.error(res);
            dispatch(changeNewAlbumAction(res))
        })
        
    }
}


export {
    getTopBannerAction,
    getHotRecommendAction,
    getNewAlbumAction
}