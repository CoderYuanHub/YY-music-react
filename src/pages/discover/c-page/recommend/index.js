import React, { memo } from 'react';

import TopBanner from './c-cpns/top-banner';

function YYRecommend() {
    return (
        <div>
            <TopBanner />
        </div>
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
