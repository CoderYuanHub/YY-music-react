import { getTopClassifyList } from '@/services/top'

import { CHANGE_TOP_MUSIC_LIST } from './constans';

//改变榜单分类列表数据
const changeTopMusicClassifyListAction = (topMusicList) => ({
    type: CHANGE_TOP_MUSIC_LIST,
    topMusicList
});

//获取榜当目录数据
const getTopMusicClassifyListAction = () => {
    return dispatch => {
        getTopClassifyList().then(res => {
            console.error('获取榜单分类数据', res)
            if(res && res.list && res.list.length) {
                dispatch(changeTopMusicClassifyListAction(res.list));
            }
        })
    }
}

export {
    getTopMusicClassifyListAction
}
