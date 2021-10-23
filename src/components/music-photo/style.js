import styled from 'styled-components';

const MusicPhotoWrapper = styled.div`
    width: 118px;
    height: 150px;
    background-position: -260px 100px;
    
    .music {
        position: relative;
        width: 100px;
        height: 100px;
        &-img {
            width: 100px;
            height: 100px;
        }
        &-a {
            width: 118px;
            height: 100px;
            background-position: 0 -570px;
        }
        &-play {
            position: absolute;
            right:8px;
            bottom: 4px;
            width: 20px;
            text-indent: -9999px;
            background: url(${require('@/assets/img/play.png').default}) no-repeat 0 -9999px;
            background-size: 100%;
        }
        &:hover {
            .music-play {
                background-position: 0;
            }
        }

    }
    .music-title {
        width: 118px;
        a {
            color: #000;
            font-size: 12px;
        }
        
    }
    .music-name {
        width: 118px;
        a {
            color: #666;
            font-size: 12px;
        }
    }
    
`;

export {
    MusicPhotoWrapper
}