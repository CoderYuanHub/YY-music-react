import styled from 'styled-components';

const NewRadioWrapper = styled.div`
    .new-radio {
        position: relative;
        margin: 20px 0 37px;
        height: 186px;
        border: 1px solid #d3d3d3;
        background: #f5f5f5;
        &-list {
            display: flex!important;
            justify-content: center;
            margin-top: 28px;

            li {
                margin-left: 11px;
            }
        }

        &-pre,
        &-next {
            position: absolute;
            width: 17px;
            height: 17px;
            cursor: pointer;
            top: 39%;
        }

        &-pre {
            background-position: -260px -75px;
            left: 4px;
            &:hover {
                background-position: -280px -75px;
            }
        }

        &-next {
            background-position: -300px -75px;
            right: 4px;
            &:hover {
                background-position: -320px -75px;
            }
        }
        
    }
`;

export {
    NewRadioWrapper
}