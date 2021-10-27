import React, { memo } from 'react';
import { RecommendLoginWrapper } from './style';

export default memo(function YYRecommendLogin() {
    return (
        <RecommendLoginWrapper className="sprite_02">
            <p className="msg">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="todo" className="btn sprite_02">用户登陆</a>
        </RecommendLoginWrapper>
    )
})
