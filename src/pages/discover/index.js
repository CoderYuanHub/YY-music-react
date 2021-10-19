import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '@/commom/local-data';

import { DiscoverTop, DiscoverWrapper } from './style';
import { NavLink } from 'react-router-dom';


export default memo(function YYDiscover(props) {
    return (
        <DiscoverWrapper>
            <DiscoverTop>
                <div className="discover-top-list wrap-v2">
                    {dicoverMenu.map(item => {
                        return (
                            <NavLink className="discover-top-list-item" key={item.link} to={item.link}>{item.title}</NavLink>
                        )
                    })}
                </div>
                
            </DiscoverTop>
            {renderRoutes(props.route.routes)}
        </DiscoverWrapper>
    )
})
