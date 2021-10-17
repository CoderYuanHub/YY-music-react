import React from 'react'
import { Redirect } from 'react-router-dom';

import YYDiscover from '@/pages/discover';
import YYMine from '@/pages/mine';
import YYFriend from '@/pages/friend';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to={"/discover" }/>
        )
    },
    {
        path: '/discover',
        component: YYDiscover
    },
    {
        path: '/mine',
        component: YYMine
    },
    {
        path: '/friend',
        component: YYFriend
    }
];
export default routes;