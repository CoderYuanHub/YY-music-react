// React基础组件以及函数方法
import React, { memo, Suspense } from 'react';
// 用户路由配置
import { renderRoutes } from 'react-router-config';
// 基础路由模式，引入hash模式
import { HashRouter } from 'react-router-dom';


// 全局路由信息
import routes from '@/router'

import YYAppHeader from '@/components/app-header';
import YYAppFooter from '@/components/app-footer';


export default memo(function App() {
    return (
        <HashRouter>
            <YYAppHeader />
            <Suspense fallback={<div>page loading</div>}>
                {renderRoutes(routes)}
            </Suspense>
            <YYAppFooter />
        </HashRouter>
    )
})
