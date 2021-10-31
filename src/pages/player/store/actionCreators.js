import { 
    getSongDetail,
    getLyric
 } from '../../../services/player';
import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_PLAY_LIST,
    CHANGE_SEQUENCE_INDEX
} from './constans';


// 改变当前音乐信息的值
const changeCurrentSongAction = (res) => ({
    type: CHANGE_CURRENT_SONG,
    currentSong: res
});
// 改变播放列表数据
const changePlayListAction = (playList) => ({
    type: CHANGE_PLAY_LIST,
    playList
});
// 改变当前播放下标
const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
});
// 改变播放顺序
const changeSequenceIndex = (sequence) => ({
    type: CHANGE_SEQUENCE_INDEX,
    sequence
});

// 切换音乐
export const switchCurrentSongAction = (tag) => {
    return (dispatch, getState) => {
        const sequence = getState().getIn(["player", "sequence"]);
        const playList = getState().getIn(["player", "playList"]);
        let currentIndex = getState().getIn(["player", "currentSongIndex"]);
        switch (sequence) {
            case 1:
                // 随机播放切换
                const index = Math.floor(Math.random() * playList.length);
                // 不对相同的时候处理，如有需要在更改判断条件即可
                currentIndex = index;
                dispatch(changeCurrentSongIndexAction(currentIndex));
                dispatch(changeCurrentSongAction(playList[currentIndex]));
                break;
            default:
                // 顺序、单曲循环切换
                currentIndex += tag;
                if(currentIndex >= playList.length) currentIndex = 0;
                if(currentIndex < 0) currentIndex = playList.length - 1;
                dispatch(changeCurrentSongIndexAction(currentIndex));
                dispatch(changeCurrentSongAction(playList[currentIndex]));
                break;
        }
    }
}


// 获取当前音乐的信息
const getCurrentSongAction = (ids) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        const index = playList.findIndex(item => item.id === ids);
        if(index !== -1) {
            // 找到歌曲
            const song = playList[index];
            dispatch(changeCurrentSongIndexAction(index));
            dispatch(changeCurrentSongAction(song));
        } else {
            // 没有找到歌曲
            // 通过id获取歌曲信息，新的设计思路不用该方法
            getSongDetail(ids).then(res => {
                if (res && res.songs.length) {
                    dispatch(changeCurrentSongAction(res.songs[0]));
                    // 将请求到的最近数据列表更新到
                    let newList = [...playList];
                    newList.push(res.songs[0]);
                    dispatch(changePlayListAction(newList));
                    dispatch(changeCurrentSongIndexAction(playList.length));
                }
            })
        }
    }
}

// 获取当前歌词
const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            
        })
    }
}

export {
    getCurrentSongAction,
    changeSequenceIndex,
    getLyricAction
}