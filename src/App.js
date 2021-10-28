// React基础组件以及函数方法
import React, { memo, Suspense } from 'react';
// 用户路由配置
import { renderRoutes } from 'react-router-config';
// 基础路由模式，引入hash模式
import { HashRouter } from 'react-router-dom';
// 共享数据
import { Provider } from 'react-redux';


// 全局路由信息
import routes from '@/router';
import store from '@/store'

import YYAppHeader from '@/components/app-header';
import YYAppFooter from '@/components/app-footer';
import Player from '@/pages/player';


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <YYAppHeader />
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <YYAppFooter />
                <Player />
            </HashRouter>
        </Provider>

    )
})
