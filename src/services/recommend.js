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