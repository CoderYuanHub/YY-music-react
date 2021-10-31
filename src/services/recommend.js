import request from './request';

// 获取banners
export function getTopBanners() {
    return request({
        url: "/banner",
    })
}
// 获取recommends
export function getHotRecommends(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}
// 获取新碟上架数据
export function getNewAlbum(limit) {
    return request({
        url: "/top/album",
        params: {
            limit
        }
    })
}

/**
 *
 * 获取榜单数据
 * @export
 * @param {*} idx
 * 0 新歌榜
 * 1 热歌榜
 * 2 原创榜
 * 3 飙升榜
 * @return {*} 
 */
export function getTopList(idx) {
    return request({
        url: "/top/list",
        params: {
            idx
        }
    })
}

// 获取歌手数据
export function getTopSinger(limit) {
    return request({
        url: "/top/artists",
        params: {
            limit
        }
    })
}