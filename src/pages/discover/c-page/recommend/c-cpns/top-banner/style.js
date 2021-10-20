import styled from 'styled-components';

const TopBannerWrapper = styled.div`
    background: url(${props => props.bgImge});
    background-size: 6000px;
    background-position: center center;
    .banner {
        position: relative;
    }
`;

const TopBannerLeft = styled.div`
    height: 285px;
    width: 730px;
    overflow:hidden;

    img {
        height: 285px;
        width: 730px;
    }
    // 修改轮播图样式
    .slick-dots-bottom {
        bottom: 22px !important;
        li {
            margin: 0 10px;
            button {
                width: 7px;
                height: 7px;
                border-radius: 100%;
                &:hover {
                    background: #b3281e;
                }
            }
        }
       
        li.slick-active {
            width: 16px;
            button {
                background: #b3281e;
            }
        }
        
    }
`;

const TopBannerRight = styled.div`
    width: 254px;
    height: 285px;
    position: absolute;
    top: 0;
    right: 0;
    background: url(${require("@/assets/img/download.png").default});
    a {
        text-indent: -9999px;
        display:block;
        height: 56px;
        width: 215px;
        margin: 186px 0 0 19px;
        background-position: 0 9999px;
        
        &:hover {
            background: url(${require("@/assets/img/download.png").default});
            background-position: 0 -290px;
        }
    }
    btn:hover {
        background-position: 0 -290px;
    }
    p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
    }
`;

const TopBannerPre = styled.div`
    background: url(${require("@/assets/img/banner_sprite.png").default}) no-repeat;
    position: absolute;
    height: 63px;
    width: 37px;
    top: 50%;
    left: -68px;
    transform: translateY(-50%);
    background-position: 0 -360px;
    cursor: pointer;

    &:hover {
        background-position: 0 -430px;
    }
`;
const TopBannerNet = styled.div`
    background: url(${require("@/assets/img/banner_sprite.png").default}) no-repeat;
    position: absolute;
    height: 63px;
    width: 37px;
    top: 50%;
    right: -68px;
    transform: translateY(-50%);
    background-position: 0 -508px;
    cursor: pointer;
    
    &:hover {
        background-position: 0 -578px;
    }
`;

export {
    TopBannerWrapper,
    TopBannerLeft,
    TopBannerRight,
    TopBannerPre,
    TopBannerNet
}