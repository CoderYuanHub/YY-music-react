import styled from 'styled-components';

const MusicInfoWrapper = styled.div`
    width:140px;
    height: 204px;
    padding-left: 42px;
    .music-photo {
        width:140px;
        height: 140px;
        position: relative;
        &-img {
            width: 100%;
            height: 100%;
        }
        &-a {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            text-indent: -99999px;
            background: url(${require('@/assets/img/sprite_cover.png').default});
            background-position: 0 0;
        }

        &-desc {
            position: absolute;
            left: 0;
            bottom:0;
            height: 27px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: url(${require('@/assets/img/sprite_cover.png').default});
            background-position: 0 -537px;


            &-num {
                display: flex;
                justify-content: flex-start;
                margin-left: 6px;

                .icon {
                    width: 17px;
                    margin-top: 3px;
                    background: url(${require('@/assets/img/sprite_icon.png').default});
                    background-position: 0 -24px;
                    display: block;
                    
                }
                .total {
                    color: #ccc;
                    font-size: 12px;
                }

            }

            &-play {
                width: 16px;
                height: 17px;
                cursor: pointer;
                margin-right: 10px;
                text-indent: -9999px;
                background: url(${require('@/assets/img/sprite_icon.png').default});
                background-position: 0 0;
                &:hover {
                    background-position: 0 -60px;
                }
            }

        }
    }
    .music-title {
        width: 140px;
        .name {
            color: #000;
            font-size: 14px;
        }
    }

    
`;

export {
    MusicInfoWrapper
}