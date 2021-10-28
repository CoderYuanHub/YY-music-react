import React, { memo } from 'react';

import { Slider } from 'antd';

import {
    PlayerWrapper,
    PlayerLock,
    PlayerMain
} from './style';

export default memo(function YYPlayer() {
    return (
        <PlayerWrapper>
            <div className="bg sprite_player"></div>
            <PlayerLock>

            </PlayerLock>
            <PlayerMain className="wrap-v2">
                <div className="progress-left">
                    <a className="pre sprite_player" href="/todo">上一首</a>
                    <a className="play sprite_player" href="/todo">播放/暂停</a>
                    <a className="next sprite_player" href="/todo">下一首</a>
                </div>
                <div className="progress-content">
                    <div className="progress-content-img">
                        <img src="http://p3.music.126.net/-LTsENKoBmp4Z_xJstfVkw==/109951165324133865.jpg?param=34y34" alt="sss"></img>
                        <a href="/todo">头像跳转</a>
                    </div>
                    <div className="progress-content-info">
                        <p>
                            <a href="/todo">梦里</a>
                            <a href="/todo">方续</a>
                            {/* <a href="/todo">附件</a> */}
                        </p>
                        <div className="progress-content-time">
                            <div className="slider">
                                <Slider defaultValue={30} />
                            </div>
                            <div className="time" style={{"marginLeft": "10px"}}>
                                <span style={{"color": "#a1a1a1"}}>00:00</span>
                                <span style={{"color": "#797979"}}> / 04:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress-right">
                    <div className="opt-left">
                        <a href="/todo" title="画中画">画中画</a>
                        <a href="/todo" title="收藏">收藏</a>
                        <a href="/todo" title="分享">分享</a>
                        <a href="/todo">分割线</a>
                        <a href="/todo" title="声音">声音</a>
                        <a href="/todo" title="循环">循环</a>
                        <a href="/todo" title="歌单">歌单</a>
                    </div>
                </div>
            </PlayerMain>
        </PlayerWrapper>
    )
})
