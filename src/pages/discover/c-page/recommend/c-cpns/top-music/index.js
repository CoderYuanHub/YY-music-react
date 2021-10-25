import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ThemeHeaderRcm from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';
import { TopMusicList, TopMusicWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';


export default memo(function TopMusic() {
    const { topNewInfo, topSugerInfo, topOriginInfo } = useSelector(state => ({
        topNewInfo: state.getIn(["recommend", "topNewInfo"]),
        topSugerInfo: state.getIn(["recommend", "topSugerInfo"]),
        topOriginInfo: state.getIn(["recommend", "topOriginInfo"])
    }))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
        return () => {
        }
    }, [dispatch])
    return (
        <TopMusicWrapper>
            <ThemeHeaderRcm title="榜单" />
            <TopMusicList className="sprite_table">
                <TopRanking info={topSugerInfo}/>
                <TopRanking info={topNewInfo}/>
                <TopRanking info={topOriginInfo}/>
            </TopMusicList>
        </TopMusicWrapper>
    )
})
