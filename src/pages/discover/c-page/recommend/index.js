import React, { memo } from 'react';


import { RecommendWrapper } from './style';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewRadio from './c-cpns/new-radio';
import TopMusic from './c-cpns/top-music';

function YYRecommend() {
    return (
        <RecommendWrapper>
            <TopBanner />
            <div className="recommend-info wrap-v3">
                <HotRecommend />
                <NewRadio />
                <TopMusic />
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
