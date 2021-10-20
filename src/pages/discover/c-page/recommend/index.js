import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';
// import { getHotRecommendAction } from './store/actionCreators';

function YYRecommend(props) {
    // hooks的redux写法
    /** 
     * useSelector说明
     * 参数一：state
     * 参数二：shallowEqual 浅层比较默认===，不添加可能导致无引用刷新，
     */
    const { topBanners } = useSelector(state => ({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend","topBanners"])
    }), shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        // 页面加载时候执行
        dispatch(getTopBannerAction());
        // 页面销毁之后执行
        return () => {
            console.log('YYRecommend销毁了')
        }
    }, [dispatch])
    return (
        <div>
            33: {topBanners.length}
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
