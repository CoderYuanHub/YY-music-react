import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import ThemeHeaderRcm from '@/components/theme-header-rcm';
import { NewRadioWrapper } from './style';
import MusicPhoto from '@/components/music-photo';

export default memo(function NewRadio() {
    const albumsRef = useRef();
    const { albums } = useSelector(state => ({
        albums: state.getIn(["recommend", "newAlbum"])
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
        return () => {
        }
    }, [dispatch])
    return (
        <NewRadioWrapper>
            <ThemeHeaderRcm title="新碟上架" />
            <div className="new-radio">
                <Carousel dots={false} ref={albumsRef}>
                    {
                        [0, 1].map((item, index) => {
                            return (
                                <ul key={item} className="new-radio-list">
                                   {albums.length && albums.slice(5*index, 5*(index+1)).map(iten => {
                                       return (
                                           <li key={iten.id}>
                                               <MusicPhoto info={iten}  />
                                           </li>
                                       )
                                   })}
                                </ul>
                            )
                        })
                    }
                </Carousel>
                <div className="new-radio-pre sprite_02" onClick={e => albumsRef.current.prev()}></div>
                <div className="new-radio-next sprite_02" onClick={e => albumsRef.current.next()}></div>
            </div>
        </NewRadioWrapper>
    )
})
