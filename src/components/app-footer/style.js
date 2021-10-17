import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    p {
        height: 24px;
        line-height: 24px;
    }
`;


export const FooterLeft = styled.div`
    .link {
        color: #999;
        font-size: 12px;
    }
    .line-division {
        padding: 0 8px 0 10px;
    }
`;

export const FooterRight = styled.div`
    .info {
        margin-top: 33px;
        display: flex;
        flex: 1;
        width: 420px;
        justify-content: space-between;
        li {
            width: auto;
            height: 70px;
            text-align: center;
            .li-a {
                width: 50px;
                display: block;
                height: 45px;
                background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
                background-repeat: no-repeat;
                background-size: 110px  552px;
                margin: 0 auto;
            }
            .li-sp {
                margin: 5px 5px 0;
                width: 52px;
                display: inline-block;
                height: 14px;
                background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
                background-repeat: no-repeat;
                background-size: 180px  139px;
            }
            &:nth-child(1) {
                .li-a {
                    background-position: -64px -457px;
                }
                .li-sp {
                    width: 72px;
                    background-position: 0 -106px;
                }
            }
            
            &:nth-child(2) {
                .li-a {
                    background-position: -64px -101px;
                }
                .li-sp {
                    background-position: 0 -89px;
                }
            }
            &:nth-child(3) {
                .li-a {
                    background-position: 4px 0;
                }
                .li-sp {
                    width: 54px;
                    background-position: 3px 2px;
                }
            }
            &:nth-child(4) {
                .li-a {
                    background-position: -64px -51px;
                }
                .li-sp {
                    background-position: 0 -53px;
                }
            }
            &:nth-child(5) {
                .li-a {
                    background-position: 4px -101px;
                }
                .li-sp {
                    background-position: 0 -70px;
                }
            }


            
        }
    }
`;