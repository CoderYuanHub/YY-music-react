import { CHANGE_HOT_RECOMMEND } from './constans'
// 初始化仓库值
const initStore = {
    hotRecommends: []
}

function reducer(store = initStore, action) {
    switch (action.type) {
        case CHANGE_HOT_RECOMMEND:
            return [...initStore.hotRecommends, action.hotRecommends]
        default:
            return store;
    }
}

export default reducer;