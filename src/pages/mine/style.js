import styled from 'styled-components';

const WYYMine = styled.div`
  min-height: 700px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #d3d3d3;
  .pic {
    width: 807px;
    height: 382px;
    margin: 0 auto 0;
    padding-top: 104px;
    background-image: url(${require("@/assets/img/mymusic.png").default});
    background-position: 0 104px;
    background-repeat: no-repeat;
    text-indent: -9999px;

    .login {
      display: block;
      width: 167px;
      height: 45px;
      margin-left: 482px;
      margin-top: 202px;
      background-image:url(${require("@/assets/img/mymusic.png").default});
      background-position: 0 -99999px;
      background-repeat: no-repeat;
      
      
      &:hover {
        background-position: 0 -278px;
      }
    }
    
  }
`;

export {
    WYYMine
}
