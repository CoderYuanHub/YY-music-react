import styled from 'styled-components';

const HotAnchorWrapper = styled.div`
    margin: 25px 20px 0;
`;

const HotAnchorHeader = styled.div`
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ccc;
    color: #333;
    h3 {
        font-size: 12px;
    }
`;

const HotAnchorList = styled.div`
    li {
        margin-top: 20px;
    }
    .list-item {
        display: flex;
        text-decoration: none;
        
        &-img {
            height: 40px;
            width: 40px;
        }

        &-info {
            margin-left: 10px;
            margin-top: 4px;
            width: 160px;
            h3 {
                color: #000;
                font-size: 12px;
            }
            p {
                color: #666;
                font-size: 12px;
            }
        }
    }
`;

export {
    HotAnchorWrapper,
    HotAnchorHeader,
    HotAnchorList
}