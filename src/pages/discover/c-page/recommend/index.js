import React, { memo } from 'react';


import { RecommendRight, RecommendLeft, RecommendWrapper } from './style';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewRadio from './c-cpns/new-radio';
import TopMusic from './c-cpns/top-music';
import RecommendLogin from './c-cpns/recommend-login';
import InSinger from './c-cpns/in-singer';
import HotAnchor from './c-cpns/hot-anchor';

function YYRecommend() {
    return (
        <RecommendWrapper>
            <TopBanner />
            <div className="recommend-info wrap-v2">
                <RecommendLeft className="wrap-v3">
                    <HotRecommend />
                    <NewRadio />
                    <TopMusic />
                </RecommendLeft>
                <RecommendRight>
                    <RecommendLogin />
                    <InSinger />
                    <HotAnchor />
                </RecommendRight>
                
            </div>

        </RecommendWrapper>
    )
};
export default memo(YYRecommend);
// hooks 之前的写法
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = (dispatch) => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(YYRecommend))
