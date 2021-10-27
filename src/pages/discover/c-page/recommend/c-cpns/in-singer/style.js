import styled from 'styled-components';

const InSingerWrapper = styled.div`
    background: #ffffff;
    padding: 15px 20px;
`;

const InSingerHeader = styled.div`
    
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(204, 204, 204);
    height: 23px;
    h3 {
        color: rgb(51, 51, 51);
        font-size: 12px;
    }
    a {
        font-size: 12px;
        color: rgb(102, 102, 102);
    }
`;

const InSingerContent = styled.div`
    margin-top: 20px;
    li {
        margin-top: 14px;
    }
    .singer-item {
        display: flex;
        width: 210px;
        height: 62px;
        background: #fafafa;
        text-decoration: none;
    }
    .singer-img {
        height: 62px;
        width: 62px;
        display: block;
    }
    .singer-info {
        width: 148px;
        height: 60px;
        padding-left: 14px;
        border: 1px solid #e9e9e9;
        .name {
            margin-top: 8px;
            font-size: 14px;
        }
        .info {
            color: #666;
            margin-top: 8px;
        }
    }
`;

const InSingerFooter =styled.div`
    margin-top: 20px;
    background-position: right -100px;
    padding: 0 1px 0 0;
    border-radius: 4px;
    .btn {
        border-radius: 4px;
        display: block;
        color: #333;
        height: 31px;
        line-height: 31px;
        text-align: center;
        font-weight: bold;
        text-decoration: none;
        background-position: 0 -59px
    }
`;

export {
    InSingerWrapper,
    InSingerHeader,
    InSingerContent,
    InSingerFooter
}