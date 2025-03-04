import React from 'react';
import styled from 'styled-components';

const ExampleContainer = () => {
  // props.children
  return (
    <StyledExample>
      <p>这是一个带有styled-components的组件</p>
    </StyledExample>
  )
}
// 使用 css in js 解决样式隔离问题
const StyledExample = styled.div
  `
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    p {
        color:red;
    }
`
export default ExampleContainer;