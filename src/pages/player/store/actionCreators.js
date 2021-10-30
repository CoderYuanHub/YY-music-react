import { getSongDetail } from '../../../services/player';
import { 
    CHANGE_CURRENT_SONG
 } from './constans';
// 改变当前音乐信息的值
const changeCurrentSong = (res) => ({
    type: CHANGE_CURRENT_SONG,
    currentSong: res
})

// 获取当前音乐的信息
const getCurrentSong = (ids) => {
    console.log(2)
    return dispatch => {
        getSongDetail(ids).then(res => {
            if(res && res.songs.length) {
                dispatch(changeCurrentSong(res.songs[0]));
            }
        })
    }
}

// 获取当前

export {
    getCurrentSong
}