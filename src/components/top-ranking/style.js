import styled from 'styled-components';

const TopRankingWrapper = styled.div`
    width: 230px;
    .more {
        height: 32px;
        line-height: 32px;
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
        a {
            color: #000;
            font-size: 12px;
        }
    }
`;

const TopRankingHeader =styled.div`
    display: flex;
    height: 120px;
    padding: 20px 0 0 21px;
    .header-left {
        position: relative;
        height: 80px;
        overflow: hidden;
        img {
            height: 80px;
            width: 80px;
        }
        a {
            text-indent: -9999px;
            background-position: -145px -57px;
        }
    }
    .header-right {
        width: 116px;
        margin: 6px 0 0 10px;

        .class {

        }
        .btn {
            display: flex;
            margin-top: 10px;
            .paly {
                display: block;
                width: 22px;
                height: 22px;
                margin-right: 10px;
                text-indent: -9999px;
                background-position: -267px -205px;

                &:hover {
                    background-position: -267px -235px;
                }
            }
            .collect {
                display: block;
                width: 22px;
                height: 22px;
                text-indent: -9999px;
                background-position: -300px -205px;
                &:hover {
                    background-position: -300px -235px;
                }
            }
        }
        
    }
`;

const TopRankingList = styled.div`
    .list-item {
        height: 32px;
        display: flex;
        &-sort {
            width: 35px;
            height: 32px;
            line-height: 32px;
            margin-left: 14px;
            text-align: center;
            color: #666;
            font-size: 16px;
            
        }
        &:nth-child(-n+3) {
            .list-item-sort {
                color: #c10d0c;
            }
        }
        &-name {
            width: 170px;
            line-height: 32px;
            height: 32px;
        }
        &:hover {
            .list-item-name {
                width: 89px;
            }
            .list-item-opt {
                display: block;
            }
        }
        &-opt {
            display: none;
            width: 82px;
            margin-top: 6px;
            white-space: nowrap;
            .play,
            .add,
            .collect {
                display: inline-block;
                width: 17px;
                height: 17px;
                text-indent: -9999px;
                margin-right: 10px;
                background-position: -267px -268px;
            }
            .play {
                &:hover {
                    background-position: -267px -288px;
                }
            }
            .add {
                margin: 2px 6px 0 0;
                background-position: 0 -698px;
                &:hover {
                    background-position: -22px -698px;
                }
            }
            .collect {
                background-position: -297px -268px;
                &:hover {
                    background-position: -297px -288px;
                }
            }
        }
    }
`;

export {
    TopRankingWrapper,
    TopRankingHeader,
    TopRankingList
}