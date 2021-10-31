import styled from 'styled-components';

const PlayerWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 53px;
    width: 100%;
    .bg {
        height: 53px;
        width: 100%;
        zoom: 1;
        margin-right: 67px;
        background-position: 0 0;
        background-repeat: repeat-x;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

const PlayerLock = styled.div`
    
`;

const PlayerMain = styled.div`
    position: absolute;
    left: 50%;
    top: 10px;
    z-index: 15;
    width: 980px;
    height: 47px;
    margin-left: -497.5px;
    display: flex;
    justify-content: space-between;
    .progress-left {
        width: 137px;
        height: 53px;
        line-height: 53px;
        display: flex;
        a {
            text-indent: -9999px;
            display: block;
            width: 28px;
            height: 28px;
            margin-right: 8px;
            margin-top: 5px;
        }
        .pre {
            background-position: 0 -130px;
            &:hover {
                background-position: -30px -130px;
            }
        }
        .play {
            background-position: 0 -204px;
            width: 36px;
            height: 36px;
            margin-top: 0;
            &:hover {
                background-position: -40px -204px;
            }
        }
        .pause {
            background-position: 0 -165px;
            width: 36px;
            height: 36px;
            margin-top: 0;
            &:hover {
                background-position: -40px -165px;
            }
        }
        .next {
            background-position: -80px -130px;
            &:hover {
                background-position: -110px -130px;
            }
        }
    }
    .progress-content {
        display: flex;
        margin-left: -30px;
        &-img {
            position: relative;
            width: 34px;
            height: 34px;
            a {
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                text-indent: -9999px;
            }
        }
        &-info {
            margin-left: 10px;
            width: 581px;
            a:nth-child(1) {
                color: #e8e8e8;
            }
            a:nth-child(2),
            a:nth-child(3) {
                margin-left: 15px;
            }

            .progress-content-time {
                margin-top: -6px;
                display: flex;
                align-items: center;
                .slider {
                    width: 466px;
                    .ant-slider-rail {
                        top: 2px;
                        background-color: transparent;
                        height: 8px;
                        background: url(${require('../../assets/img/progress_bar.png').default}) right 0 no-repeat;
                    }
                    .ant-slider-track {
                        background: url(${require('../../assets/img/progress_bar.png').default}) left -66px no-repeat;
                        background-color: transparent;
                        height: 8px;
                        top: 2px;
                        // left: -6px !important;
                    }
                    .ant-slider-handle {
                        // margin-top: -8px;
                    }
                }
            }

        }
    }

    //右侧操作
    .progress-right {
        display: flex;
        .opt-left {
            display: flex;
            align-items: center;

            a {
                text-indent: -9999px;
                display: block;
                height: 25px;
                width: 25px;
                margin-left: 3px;

                &:nth-child(1) {
                    background: url(${require('@/assets/img/dv.png').default}) 0 0 no-repeat;
                    &:hover {
                        background-position-y: -25px;
                    }
                }
                &:nth-child(2) {
                    background: url(${require('@/assets/img/playbar_sprite.png').default}) -88px -163px no-repeat;
                    &:hover {
                        background-position: -88px -189px;
                    }
                }
                &:nth-child(3) {
                    background: url(${require('@/assets/img/playbar_sprite.png').default}) -114px -163px no-repeat;
                    &:hover {
                        background-position: -114px -189px;
                    }
                }
                &:nth-child(4) {
                    margin-top: -17px;
                    width: 10px;
                    background: url(${require('@/assets/img/playbar_sprite.png').default}) -147px -238px no-repeat;
                }
                &:nth-child(5) {
                    background: url(${require('@/assets/img/playbar_sprite.png').default}) -2px -247px no-repeat;
                    &:hover {
                        background-position: -31px -248px;
                    }
                }
                &:nth-child(6) {
                    background-position: ${props => {
                        switch (props.sequence) {
                            case 0:
                                return "-3px -344px;";
                            case 1:
                                return "-66px -248px;";
                            default:
                                return "-66px -344px;";
                        }
                    }}
                    &:hover {
                        background-position: ${props => {
                            switch (props.sequence) {
                                case 0:
                                    return "-33px -344px";
                                case 1:
                                    return "-93px -248px ";
                                default:
                                    return "-93px -344px";
                            }
                        }};
                    }
                }
                &:nth-child(7) {
                    width: 59px;
                    background: url(${require('@/assets/img/playbar_sprite.png').default}) -42px -68px no-repeat;
                    &:hover {
                        background-position: -42px -98px;
                    }
                }
            }
            .order {
                background-position: -3px -344px !important;
                &:hover {
                    background-position: -33px -344px !important;
                }
            }
            .random {
                background-position: -66px -248px !important;
                &:hover {
                    background-position: -93px -248px !important;
                }
            }
            .singer {
                background-position: -66px -344px !important;
                &:hover {
                    background-position: -93px -344px !important;
                }
            }
        }
        .opt-right {
            
        }
    }
    
`;

export {
    PlayerWrapper,
    PlayerLock,
    PlayerMain
}