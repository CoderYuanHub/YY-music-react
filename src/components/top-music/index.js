import React, {memo, useEffect} from 'react'
import TopMusicClassify from './c-cpns/top-music-classify'
import { TopMusicWrapper } from './style'

import { getTopMusicClassifyListAction } from "./store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


export default memo(function YYTopMusic() {
    const dispatch = useDispatch();
    const { classifyList } = useSelector(state => ({
        classifyList: state.getIn(["classify", "classifyList"])
    }), shallowEqual);
    useEffect(() => {
        dispatch(getTopMusicClassifyListAction());
    }, [dispatch])
    useEffect(() => {
        console.error('监听数据变化',classifyList)
    }, [classifyList]);
    const musicList = classifyList.slice(0, 4);
    const globalList = classifyList.slice(4);
    return (

        <TopMusicWrapper>
            {/*左侧列表数据*/}
            <TopMusicClassify list={musicList} title={"云音乐特色榜"}></TopMusicClassify>
            <TopMusicClassify list={globalList} title={"全球媒体榜"}></TopMusicClassify>
        </TopMusicWrapper>
    )
})
