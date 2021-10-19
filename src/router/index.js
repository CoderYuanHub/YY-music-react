import React from 'react'
import { Redirect } from 'react-router-dom';

import YYDiscover from '@/pages/discover';
import YYRecommend from '@/pages/discover/c-page/recommend';
import YYSinger from '@/pages/discover/c-page/singer';
import YYSongs from '@/pages/discover/c-page/songs';
import YYTop from '@/pages/discover/c-page/top';
import YYDjradio from '@/pages/discover/c-page/djradio';
import YYNewdisc from '@/pages/discover/c-page/newdisc';
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
        component: YYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => (
                    <Redirect to={"/discover/recommend" } />
                )
            },
            {
                path: '/discover/recommend',
                component: YYRecommend,
            },
            {
                path: '/discover/singer',
                component: YYSinger,
            },
            {
                path: '/discover/songs',
                component: YYSongs,
            },
            {
                path: '/discover/top',
                component: YYTop,
            },
            {
                path: '/discover/djradio',
                component: YYDjradio,
            },
            {
                path: '/discover/newdisc',
                component: YYNewdisc,
            }
        ]
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