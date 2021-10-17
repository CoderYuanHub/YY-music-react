import React, { memo } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { HeaderLinks } from '@/commom/local-data';

// 引入样式组件
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { NavLink } from 'react-router-dom';


export default memo(function YYAppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a className={"sprite_01 logo"} href="/#">网易云音乐</a>
                    <div>
                        {HeaderLinks.map(item => {
                            if (item.isRouter) {
                                return (<NavLink key={item.title} className={"select-item"} to={item.link}>
                                            {item.title}
                                            <i className="sprite_01 icon"></i>
                                        </NavLink>)
                            } else {
                                return <a key={item.title} className={"select-item"} href={item.link}>{item.title}</a>
                            }
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input
                        className="search"
                        placeholder="音乐/视频/电台"
                        prefix={<SearchOutlined />}
                    />
                    <div className="creators">创作者中心</div>
                    <div className="login">登陆</div>
                </HeaderRight>
            </div>
            <div className="line"></div>
        </HeaderWrapper>
    )
})
