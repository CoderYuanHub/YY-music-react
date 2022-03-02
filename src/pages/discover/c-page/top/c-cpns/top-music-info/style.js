import styled from 'styled-components';

const TopMusicWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

//音乐大概
const TopMusicInfoWrapper = styled.div`
    display: flex;
    padding: 40px;
    .info-left {
        width: 150px;
        height: 150px;
    }
    .info-right {
        height: 150px;
        width: 100%;
        margin-left: 20px;
      
        &-name {
            font-size: 20px;
            color: #333;
        }
        
        &-time {
            font-size: 12px;
        }
      
        &-opt {
            .play {
                padding: 0px 5px 0px 0px;
                white-space: nowrap;
                display: inline-block;
                height: 31px;
                line-height: 31px;
                text-align: center;
                background-position: right -428px
            }
            
            .add {
              
            }
            
            .collect {
              
            }
            
            .share {
              
            }
          
            .down {
              
            }
          
            .comment {
              
            }
        }
    }
`;

//音乐列表
const TopMusicListWrapper = styled.div`

`;

// 音乐评论
const TopMusicComment = styled.div`

`;
export {
    TopMusicWrapper,
    TopMusicInfoWrapper,
    TopMusicListWrapper,
    TopMusicComment
}
