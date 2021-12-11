import { getTopClassifyList } from '@/services/top'

import { CHANGE_TOP_MUSIC_LIST } from './constans';

//改变榜单分类列表数据
const changeTopMusicClassifyListAction = (classifyList) => ({
    type: CHANGE_TOP_MUSIC_LIST,
    classifyList
});

//获取榜当目录数据
const getTopMusicClassifyListAction = () => {
    return dispatch => {
        getTopClassifyList().then(res => {
            if (res && res.list) {
                dispatch(changeTopMusicClassifyListAction(res.list));
            }
        })
    }
}

export {
    getTopMusicClassifyListAction
}
