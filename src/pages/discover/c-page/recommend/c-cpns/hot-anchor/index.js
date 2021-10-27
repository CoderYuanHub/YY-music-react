import React, { memo } from 'react'
import { hotRadios } from '@/commom/local-data';
import { HotAnchorHeader, HotAnchorList, HotAnchorWrapper } from './style';
import { getSizeImage } from '../../../../../../utils/format-utils';


export default memo(function YYHotAnchor() {
    console.log(hotRadios)
    return (
        <HotAnchorWrapper>
            <HotAnchorHeader>
                <h3>热门主播</h3>
            </HotAnchorHeader>
            <HotAnchorList>
                <ul>
                    {hotRadios.map(item => {
                        return (
                            <li key={item.picUrl}>
                                <a className="list-item" href={item.url}>
                                    <img className="list-item-img" src={getSizeImage(item.picUrl, 40)} alt={item.name}></img>
                                    <div className="list-item-info">
                                        <h3 className="text-nowrap">{item.name}</h3>
                                        <p className="text-nowrap">{item.position}</p>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </HotAnchorList>
        </HotAnchorWrapper>
    )
})
