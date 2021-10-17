import React, { memo } from 'react';

import { footerLinks, footerImages } from '@/commom/local-data';

import { FooterLeft, FooterRight, FooterWrapper } from './style';
import { NavLink } from 'react-router-dom';


export default memo(function AppFooter() {
    return (
        <FooterWrapper className="wrap-v2">
            <FooterLeft>
                <p>
                    {footerLinks.map((item, index) => {
                        return (
                            item.isRouter ? 
                            <NavLink className="link" key={item.title} to={item.link}>
                                {item.title}
                                <span className="line-division">|</span>
                            </NavLink> :
                            <a className="link" href={item.link} key={item.title}>
                                {item.title}
                                {index !== 5 ? <span className="line-division">|</span> : null}
                            </a>
                        )
                    })}
                </p>
                <p>
                    <span style={{paddingRight: "14px"}}>网易公司版权所有©1997-2021</span>
                    <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
                </p>
                <p>
                    <span style={{paddingRight: "14px"}}>违法和不良信息举报电话：0571-89853516</span>
                    <span>举报邮箱：ncm5990@163.com</span>
                </p>
                <p>
                    <span style={{paddingRight: "14px"}}>粤B2-20090191-18  工业和信息化部备案管理系统网站</span>
                    <span>浙公网安备 33010902002564号</span>
                </p>
            </FooterLeft>
            <FooterRight>
                <ul className="info">
                    {footerImages.map(item => {
                        return (
                            <li key={item.link}>
                                <a className="li-a " href={item.link}>{item.title}</a>
                                <span className="li-sp"></span>
                            </li>
                        )
                    })}
                </ul>
            </FooterRight>
        </FooterWrapper>
    )
})
