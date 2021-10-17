import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #242424;
    .content {
        display: flex;
        justify-content: space-between;
    }
    .line {
        height: 5px;
        background-color: #C20C0C;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    font-size: 14px;
    .logo {
        height: 69px;
        display: block;
        width: 176px;
        // a标签元素抛出屏幕外
        text-indent: -9999px;
        background-position: 0 0;
    }
    .select-item {
        display: inline-flex;
        height: 70px;
        color: #fff;
        padding: 0 19px;
        line-height: 70px;

        &:hover {
            background-color: #000;
            text-decoration: none;
        }
    }
    .active {
        background-color: #000;
        position: relative;
        & .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
        }
    }
    .select-item:nth-child(6) {
        position: relative;
        ::after {
            position: absolute;
            content: "";
            width: 28px;
            height: 19px;
            background-image: url(${require("@/assets/img/sprite_01.png").default});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
        }
    }
    
`;
const HeaderRight = styled.div`
    display: flex;
    color: #ccc;
    align-items: center;
    
    .search {
        border-radius: 32px;
        width: 158px;
        height: 32px;
        font-size: 12px;
    }
    .creators {
        color: #ccc;
        width: 90px;
        font-size: 12px;
        height: 32px;
        line-height: 32px;
        border: 1px solid #4F4F4F;
        border-radius: 16px;
        text-align: center;
        margin: 0 20px;

        &:hover {
            color: #fff;
            border: 1px solid #fff;
        }
    }

    .login {
        font-size: 12px;
        color: #fff;
        cursor: pointer;
    }
    
`

export {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
}