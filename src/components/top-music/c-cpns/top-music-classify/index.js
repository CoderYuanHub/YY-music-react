import React, {memo} from 'react';

import { getSizeImage } from "@/utils/format-utils";

import { WYYTopMusicClassify } from './style';

export default memo(function TopMusicClassify (props) {
    return (
        <WYYTopMusicClassify>
            <h2 className={"top-title"}>{props.title}</h2>
            <ul className={"top-list"}>
                {
                    props.list.map(item => {
                        return (
                            <li className={"top-list-item"}>
                                <div className={"top-list-item-left"}>
                                    <img src={getSizeImage(item.coverImgUrl, 40)} alt=""/>
                                </div>
                                <div className={"top-list-item-right"}>
                                    <h5 className={"title"}>{item.name}</h5>
                                    <p className={"update"}>{item.updateFrequency}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </WYYTopMusicClassify>
    )
})
