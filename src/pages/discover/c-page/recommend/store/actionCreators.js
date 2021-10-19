import { CHANGE_HOT_RECOMMEND } from './constans'

const changeHotRecommendAction = (res) => ({
    type: CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
});


export {
    changeHotRecommendAction
}