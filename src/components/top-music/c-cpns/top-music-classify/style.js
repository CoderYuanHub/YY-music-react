import styled from 'styled-components';

const WYYTopMusicClassify = styled.div`
  width: 240px;
  .top-title {
    padding: 20px 0 10px 20px;
  }
  
  .top-list {
    
    &-item {
      display: flex;
      align-items: center;
      height: 62px;
      padding-left: 20px;
      cursor: pointer;
      
      &:hover {
        background-color: #f4f2f2;
      }
      .active {
        background-color: #e6e6e6;
      }
      
      &-left {
        img {
          width: 40px;
          height: 40px;
        }
      }
      
      &-right {
        margin-left: 10px;
        font-size: 12px;

        .title {
          color: #000;
        }
        .update {
          color: #999;
        }
      }
    }
    
  }
`;

export {
    WYYTopMusicClassify
}
