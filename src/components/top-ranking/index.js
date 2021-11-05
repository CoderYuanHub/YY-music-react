import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import {  getCurrentSongAction, changePlayListAction } from '@/pages/player/store/actionCreators'

import { message } from 'antd'
import { TopRankingWrapper, TopRankingHeader, TopRankingList } from './style';

export default memo(function YYTopRanking(props) {
    // state and props
    const {
        info = {
            name: "",
            coverImgUrl: "",
            tracks: []
        }
    } = props;

 

    // redux hooks
    const dispatch = useDispatch();
    const { playList } = useSelector(state => ({
        playList: state.getIn(["player", "playList"])
    }))


    // handle 
    // 播放事件
    const handlePlay = (e, info) => {
        e.preventDefault();
        dispatch(getCurrentSongAction(info.id));
    }
    // 添加事件
    const handleAdd = (e, info) => {
        e.preventDefault();
        const result = playList.some(item => item.id === info.id);
        if(!result) {
            playList.push(info);
            console.error(playList);
            dispatch(changePlayListAction(playList));
        } else {
            message.warning('当前音乐已经存在！');
        }
    }
    return (
        <TopRankingWrapper>
            <TopRankingHeader>
                <div className="header-left">
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt=""></img>
                    <a className="image_cover" href="/todo">背景</a>
                </div>
                <div className="header-right">
                    <a className="class" href="/todo">
                        <h3>{info.name}</h3>
                    </a>
                    <div className="btn">
                        <a className="paly sprite_02" href="/todo" >播放</a>
                        <a className="collect sprite_02" href="/todo" >收藏</a>
                    </div>
                </div>
            </TopRankingHeader>
            <TopRankingList>
                <ul>
                    {
                        info.tracks && info.tracks.length && info.tracks.slice(0, 10).map((item, index) => {
                            return (
                                <li className="list-item" key={item.id}>
                                    <div className="list-item-sort">{index + 1}</div>
                                    <div className="list-item-name text-nowrap">
                                        <a href="/todo">{item.name}</a>
                                    </div>
                                    <div className="list-item-opt">
                                        <a className="play sprite_02" onClick={e => handlePlay(e, item)} href="/todo">播放</a>
                                        <a className="add sprite_icon2" onClick={e => handleAdd(e, item)} href="/todo">添加</a>
                                        <a className="collect sprite_02" href="/todo">收藏</a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </TopRankingList>
            <div className="more">
                <a href="/todo">查看更多&gt;</a>
            </div>

        </TopRankingWrapper>
    )
})
