import styled from "styled-components";

const WYYFriend = styled.div`
  min-height: 700px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #d3d3d3;
  .pic {
    width: 807px;
    height: 500px;
    margin: 0 auto 0;
    padding-top: 104px;
    background-image: url(${require("@/assets/img/notlogin.jpg").default});
    background-position: 0 70px;
    background-repeat: no-repeat;
    text-indent: -9999px;

    .login {
      display: block;
      width: 157px;
      height: 48px;
      margin-left: 535px;
      margin-top: 226px;
      background-image:url(${require("@/assets/img/notlogin.jpg").default});
      background-position: 0 -99999px;
      background-repeat: no-repeat;


      &:hover {
        background-position: 0 -430px;
      }
    }
`;

export {
    WYYFriend
}
