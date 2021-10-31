import request from './request';

/**
 *
 * 通过ids获取音乐歌手信息
 * @export
 * @param {*} ids 音乐id
 * @return {*} 
 */
export function getSongDetail(ids) {
    console.log(3)
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}
/**
 *
 * 通过id获取播放音乐的Url
 * @export
 * @param {*} id
 * @return {*} 
 */
export function getSongUrl(id) {
    return request({
        url: "/song/url",
        params: {
            id
        }
    })
}

/**
 *
 * 通过id来获取歌词
 * @export
 * @param {*} id
 * @return {*} 
 */
export function getLyric (id) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}