import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTopMusicListAciton } from '../../store/actionCreators'

import TopMusic from '@/components/top-music';
import { TopMusicListWrapper } from './style';


export default memo(function TopMusicList() {
    const dispatch = useDispatch();
    // 函数加载获取数据
    useEffect(() => {
        dispatch(getTopMusicListAciton())
        return () => {
        }
    }, [dispatch])
    return (
        <TopMusicListWrapper>
            <TopMusic />
        </TopMusicListWrapper>
    )
})
