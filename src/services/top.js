import request from "./request";

//获取排行榜列表数据
export function getTopClassifyList() {
    return request({
        url: "/toplist/detail/playlist/highquality/tags"
    })
}
