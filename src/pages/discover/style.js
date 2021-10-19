import styled from 'styled-components';

export const DiscoverWrapper = styled.div`

`;

export const DiscoverTop = styled.div`
    height: 30px;
    line-height: 24px;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    .discover-top-list {
        &-item {
            color: #fff;
            font-size: 12px;
            text-decoration: none;
            padding: 0 13px;
            display: inline-block;
            margin: 0 17px;
            height: 20px;
            line-height: 21px;
            border-radius: 25px;
        }
        &-item: hover,
        .active{
            background-color: #9B0909;
        }
        &-item:nth-child(1) {
            margin-left: 138px;
        }
    }
`;