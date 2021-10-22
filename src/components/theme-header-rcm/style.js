import styled from 'styled-components';

const ThemeHeaderRcmWrapper = styled.div`
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #C10D0C;
    
`;

const ThemeHeaderRcmLeft = styled.div`
    background: url(${require('@/assets/img/sprite_02.png').default}) no-repeat 0 9999px;
    background-position: -225px -156px;

    .them-title {
        font-size: 20px;
        font-weight: normal;
        color: #333;
        text-decoration: none;
        padding: 0 13px 0 34px;

        &-detail {
            font-size: 12px;
            color: #666;
            padding: 0 10px;
        }

        &-sprite {
            color: #ccc;
        }

    }
`;


const ThemeHeaderRcmRight = styled.div`
    .them-more {
        font-size: 12px;
        color: #666;
    }
    .them-cion {
        background: url(${require('@/assets/img/sprite_02.png').default}) no-repeat 0 9999px;
        background-position: 0 -240px;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;

    }
`;

export {
    ThemeHeaderRcmWrapper,
    ThemeHeaderRcmLeft,
    ThemeHeaderRcmRight
}