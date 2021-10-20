import React, { memo, useEffect, useState, useCallback, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import { TopBannerWrapper, TopBannerLeft, TopBannerRight, TopBannerPre, TopBannerNet } from './style';

export default memo(function TopBanner() {
    // 局部变量的使用
    const [bgImgeIndex, setBgImgeIndex] = useState(0);

    // useSelector获取redux中的数据
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"], shallowEqual)
    }));
    // useDispatch
    const dispatch = useDispatch();
    // 页面加载进来调用
    useEffect(() => {
        dispatch(getTopBannerAction());
        // 组件销毁时会调用
        return () => {
        }
    }, [dispatch]);
    // 其他hooks逻辑
    const bannerRef = useRef()
    // 处理轮播图切换
    const bannerChange = useCallback(
        (from, to) => {
            setTimeout(() => {
                setBgImgeIndex(to);
            }, 0)
        },[])
    const bgImge = topBanners[bgImgeIndex] && (topBanners[bgImgeIndex].imageUrl + "?imageView&blur=40x20");
    return (
        <TopBannerWrapper bgImge={bgImge}>
            <div className="banner wrap-v2">
                <TopBannerLeft>
                    <Carousel autoplaySpeed={5000} ref={bannerRef} autoplay effect="fade" beforeChange={bannerChange}>
                        {
                            topBanners.map(item => {
                                return (
                                    <a key={item.scm} href={item.url}>
                                        <img src={item.imageUrl} alt="img"></img>
                                    </a>
                                )
                            })
                        }
                    </Carousel>
                </TopBannerLeft>
                <TopBannerRight>
                    <a href="/down" className="btn">
                        下载客户端
                    </a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </TopBannerRight>
                <TopBannerPre onClick={e => bannerRef.current.prev()}></TopBannerPre>
                <TopBannerNet onClick={e => bannerRef.current.next()}></TopBannerNet>
            </div>
        </TopBannerWrapper>
    )
})
