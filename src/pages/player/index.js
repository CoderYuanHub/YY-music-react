import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '../../utils/format-utils'
import { getCurrentSong } from './store/actionCreators'
import { Slider } from 'antd';

import {
    PlayerWrapper,
    PlayerLock,
    PlayerMain
} from './style';

export default memo(function YYPlayer() {
    // props and state
    // 当前播放时间
    const [currenTime, setCurrenTime] = useState(0);
    // 是否在拖动进度条
    const [isChanging, setIsChanging] = useState(false);
    // 播放/暂停
    const [isplaying, setIsPlaying] = useState(false)

    // redux hooks
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    const palyerRef = useRef();
    useEffect(() => {
        // 获取播放音乐
        dispatch(getCurrentSong(1456890009));
        return () => {
        }
    }, [dispatch]);
    // 监听音乐的变化
    useEffect(() => {
        palyerRef.current.src = getPlaySong(currentSong?.id);
        return () => {
        }
    }, [currentSong])

    // other handle 
    const duration = currentSong.dt || 0;

    // handle，对于传入自定义组件的handle需要用useCallback,防止重绘调用
    // 点击播放音乐
    const handlePlay = (e) => {
        e.preventDefault();
        if(!isplaying) {
            palyerRef.current.play();
        } else {
            palyerRef.current.pause();
        }
        setIsPlaying(!isplaying);
    }
    // 获取当前时间，audio属性有提供方法获取,用于进度条展示
    const onPlayTimeUpdate = (e) => {
        if (!isChanging) {
            setCurrenTime(e.target.currentTime * 1000);
        }
        // 当音乐播放结束暂停
        if (e.target.currentTime * 1000 >= duration) {
            palyerRef.current.pause();
        }
    }

    // 进度条拖拽时事件
    const siderChange = useCallback((value) => {
        setIsChanging(true);
        setCurrenTime(value);
    }, []);
    // 进度条拖拽后事件
    const siderAfterChange = useCallback((value) => {
        setIsChanging(false);
        palyerRef.current.currentTime = value / 1000;
        palyerRef.current.play();

    }, [])
    return (
        <PlayerWrapper>
            <div className="bg sprite_player"></div>
            <PlayerLock>

            </PlayerLock>
            <PlayerMain className="wrap-v2">
                <div className="progress-left">
                    <a className="pre sprite_player" href="/todo">上一首</a>
                    <a className={isplaying ? "pause sprite_player" : "play sprite_player"} onClick={e => handlePlay(e)} href="/todo">播放/暂停</a>
                    <a className="next sprite_player" href="/todo">下一首</a>
                </div>
                <div className="progress-content">
                    <div className="progress-content-img">
                        <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="sss"></img>
                        <a href="/todo">头像跳转</a>
                    </div>
                    <div className="progress-content-info">
                        <p>
                            <a href="/todo">{currentSong.name}</a>
                            <a href="/todo">{currentSong?.ar?.length && currentSong.ar.map((item, index) => {
                                return (
                                    <span key={item.id}>
                                        {item.name}
                                        {index !== currentSong.ar.length - 1 ? '/' : ''}
                                    </span>
                                )
                            })}</a>
                            {/* <a href="/todo">附件</a> */}
                        </p>
                        <div className="progress-content-time">
                            <div className="slider">
                                <Slider
                                    tipFormatter={value => formatDate(currenTime, "mm:ss")}
                                    onChange={value => siderChange(value)}
                                    onAfterChange={value => siderAfterChange(value)}
                                    max={duration}
                                    value={currenTime}
                                />
                            </div>
                            <div className="time" style={{ "marginLeft": "10px" }}>
                                <span style={{ "color": "#a1a1a1" }}>{formatDate(currenTime, "mm:ss")}</span>
                                <span style={{ "color": "#797979" }}> / {formatDate(currentSong?.dt, "mm:ss")}</span>
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
            <audio ref={palyerRef} onTimeUpdate={e => onPlayTimeUpdate(e)} />
        </PlayerWrapper>
    )
})