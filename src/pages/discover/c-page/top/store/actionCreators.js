import { getTopList } from '@/services/ranking';
import { CHANGE_TOP_MUSIC_LIST } from './constans';

// 改变榜单列表
const changeTopMusicListAction = (topClassify) => ({
    type: CHANGE_TOP_MUSIC_LIST,
    topClassify
});

// 获取榜单列表数据
const getTopMusicListAciton = () => {
    return dispatch => {
        getTopList().then(res => {
            if(res && res.list) {
                dispatch(changeTopMusicListAction(res.list))
            }
        })
    }
}

export {
    getTopMusicListAciton
}
