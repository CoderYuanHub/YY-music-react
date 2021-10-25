import styled from 'styled-components';

const TopMusicWrapper = styled.div`

`;

const TopMusicList = styled.div`
    height: 472px;
    margin-top: 20px;
    background: url(${require('@/assets/img/recommend-top-bg.png').default});
    display: flex;
    flex: 1;
`;

export {
    TopMusicWrapper,
    TopMusicList
}