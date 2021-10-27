import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizeImage } from '../../../../../../utils/format-utils';
import { getInSIngerAction } from '../../store/actionCreators';
import { InSingerWrapper, InSingerHeader, InSingerContent, InSingerFooter } from './style';

export default memo(function YYInSinger() {
    const { inSingerList = [] } = useSelector(state => ({
        inSingerList: state.getIn(["recommend", "inSingerList"])
    }))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInSIngerAction());
        return () => {

        }
    }, [dispatch])
    return (
        <InSingerWrapper>
            <InSingerHeader>
                <h3>入驻歌手</h3>
                <p>
                    <a href="/todo">查看全部&gt;</a>
                </p>
            </InSingerHeader>
            <InSingerContent>
                <ul>
                    {inSingerList.length && inSingerList.map(item => {
                        return (
                            <li key={item.id}>
                                <a className="singer-item" href="/todo">
                                    <img className="singer-img" src={getSizeImage(item.picUrl, 62)} alt="123"></img>
                                    <div className="singer-info">
                                        <h4 className="name text-nowrap">
                                            {item.name}
                                        </h4>
                                        <p className="info text-nowrap">
                                            台湾歌手张惠妹
                                        </p>
                                    </div>
                                </a>
                            </li>
                        );
                    })}


                </ul>
            </InSingerContent>
            <InSingerFooter className="sprite_button">
                <a className="btn sprite_button" href="/todo">申请为网易音乐人</a>
            </InSingerFooter>
        </InSingerWrapper>
    )
})
