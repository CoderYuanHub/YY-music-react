import React, { memo } from 'react';

import {
    TopMusicWrapper,
    TopMusicInfoWrapper,
    TopMusicListWrapper,
    TopMusicComment

} from './style';

export default memo(function TopMusicInfo() {
    return (
        <TopMusicWrapper>
            {/*详情部分*/}
            <TopMusicInfoWrapper>
                <div className={"info-left"}>
                    <img src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" alt=""/>
                </div>
                <div className={"info-right"}>
                    <h2 className={"info-right-name"}>飙升榜</h2>
                    <p className={"info-right-time"}>
                        最近更新：12月13日
                        <span style={{color: '#999'}}>（刚刚更新）</span>
                    </p>
                    <div className={"info-right-opt"}>
                        <a className={"sprite_button play"} href="/todo">播放</a>
                        <a className={"sprite_button add"} href="/todo">+</a>
                        <a className={"sprite_button collect"} href="/todo">收藏</a>
                        <a className={"sprite_button share"} href="/todo">分享</a>
                        <a className={"sprite_button down"} href="/todo">下载</a>
                        <a className={"sprite_button comment"} href="/todo">评论</a>
                    </div>
                </div>
            </TopMusicInfoWrapper>
            {/*歌曲列表部分*/}
            <TopMusicListWrapper>

            </TopMusicListWrapper>
            {/*评论部分*/}
            <TopMusicComment>

            </TopMusicComment>
        </TopMusicWrapper>
    )
})
