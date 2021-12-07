import React, { memo } from 'react';
import TopMusicInfo from './c-cpns/top-music-info';
import TopMusicList from './c-cpns/top-music-list';

import { TopWrapper } from './style'

export default memo(function YYTop() {
    return (
        <TopWrapper className="wrap-v2 ">
            <TopMusicList />
            <TopMusicInfo />
        </TopWrapper>
    )
})
