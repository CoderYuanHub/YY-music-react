import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils'

import { MusicPhotoWrapper } from './style'

export default memo(function MusicPhoto(props) {
    const { info, size = 100 } = props;
    return (
        <MusicPhotoWrapper className="sprite_02">
            <div className="music">
                <img className="music-img" src={getSizeImage(info.picUrl, size)} alt={info.name}></img>
                <a className="music-a image_cover" href="/todo">音乐背景</a>
                <a className="music-play" href="/todo">音乐背景</a>
            </div>
            <p className="music-title text-nowrap ">
                <a title={info.name} href="/todo">{info.name}</a>
            </p>
            <p className="music-name text-nowrap">
                <a title={info.artist.name}  href="/todo">{info.artist.name}</a>
            </p>
        </MusicPhotoWrapper>
    )
})
