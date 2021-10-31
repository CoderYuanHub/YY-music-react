import React, { memo } from 'react';

import { getSizeImage } from '../../utils/format-utils';
import {  getCurrentSongAction } from '../../pages/player/store/actionCreators'

import { TopRankingWrapper, TopRankingHeader, TopRankingList } from './style';
import { useDispatch } from 'react-redux';

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

    // handle 
    // 播放事件
    const handlePlay = (e, info) => {
        e.preventDefault();
        dispatch(getCurrentSongAction(info.id));
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
                                        <a className="add sprite_icon2" href="/todo">添加</a>
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
