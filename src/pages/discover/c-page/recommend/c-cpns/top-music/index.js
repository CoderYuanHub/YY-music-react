import React, { memo } from 'react'
import { TopMusicWrapper } from './style';

import ThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function TopMusic() {
    return (
        <TopMusicWrapper>
            <ThemeHeaderRcm title="榜单"/>
        </TopMusicWrapper>
    )
})
