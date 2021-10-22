import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators'

import ThemeHeaderRcm from '@/components/theme-header-rcm';
import { NewRadioWrapper } from './style';

export default memo(function NewRadio() {
    const { albums } = useSelector(state => ({
        albums: state.getIn(["recommend", "newAlbum"])
    }))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
        return () => {
        }
    }, [dispatch])
    return (
        <NewRadioWrapper>
            <ThemeHeaderRcm title="新碟上架" />
            <p>albums: {albums.length}</p>
        </NewRadioWrapper>
    )
})
