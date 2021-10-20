import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from './constans';
import { getHotRecommends } from '@/services/recommend'
import { getTopBanners } from '../../../../../services/recommend';

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

const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            console.error(res);
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


export {
    getTopBannerAction,
    getHotRecommendAction
}