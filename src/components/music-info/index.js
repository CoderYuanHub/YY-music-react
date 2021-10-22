import React, { memo } from 'react'

import { getCount } from '@/utils/format-utils'

import { MusicInfoWrapper } from './style'

export default memo(function MusicInfo(props) {
    const { musicImg, musicTitle, musicPlayCount } = props;
    return (
        <MusicInfoWrapper>
            <div className="music-photo">
                <img className="music-photo-img" src={musicImg} alt={musicImg}></img>
                <a className="music-photo-a" title={musicTitle} href={musicImg}>{musicTitle}</a>
                <div className="music-photo-desc">
                    <div className="music-photo-desc-num">
                        <i className="icon"></i>
                        <p className="total">{getCount(musicPlayCount)}</p>
                    </div>
                    <div title="播放" className="music-photo-desc-play">播放</div>
                </div>
            </div>
            <p className="music-title">
                <a className="name" href={musicTitle}>{musicTitle}</a>
            </p>
        </MusicInfoWrapper>
    )
})
