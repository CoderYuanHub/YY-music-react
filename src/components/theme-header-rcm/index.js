import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeHeaderRcmWrapper, ThemeHeaderRcmLeft, ThemeHeaderRcmRight } from './style'

export default memo(function ThemeHeaderRcm(props) {
    const { title, titleLink } = props;
    return (
        <ThemeHeaderRcmWrapper>
            <ThemeHeaderRcmLeft>
                <NavLink to="/discover/recommend" className="them-title">{title}</NavLink>
                {titleLink && titleLink.length && titleLink.map((item, index) => {
                    return (
                        <Fragment key={item.title}>
                            <NavLink to={item.link} className="them-title-detail">{item.title}</NavLink>
                            {titleLink.length !== index + 1 ? <span className="them-title-sprite">|</span> : ''}
                        </Fragment>
                    );
                })}
            </ThemeHeaderRcmLeft>
            <ThemeHeaderRcmRight>
                <NavLink to="/discover/recommend" className="them-more">更多</NavLink>
                <i className="them-cion"></i>
            </ThemeHeaderRcmRight>
        </ThemeHeaderRcmWrapper>
    )
})
