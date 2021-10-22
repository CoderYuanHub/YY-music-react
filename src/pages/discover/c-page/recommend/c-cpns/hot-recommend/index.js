import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hotRecommend } from '@/commom/local-data';
import { getSizeImage } from '@/utils/format-utils';
import { getHotRecommendAction } from '../../store/actionCreators';

import { HotRecommendWrapper } from './style';
import ThemeHeaderRcm from '@/components/theme-header-rcm';
import MusicInfo from '@/components/music-info';

export default memo(function HotRecommend() {
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotRecommendAction(8));
        return () => {
        }
    }, [dispatch])
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm title="热门推荐" titleLink={hotRecommend} />
            <ul className="hot-list">
                {hotRecommends.length && hotRecommends.map(item => {
                    return (
                        <li style={{"width": "182px"}} key={item.id}>
                            <MusicInfo  musicImg={getSizeImage(item.picUrl, 140)} musicTitle={item.name} musicPlayCount={item.playCount}/>
                        </li>

                    );
                })} 
            </ul>
            
        </HotRecommendWrapper>
    )
})
