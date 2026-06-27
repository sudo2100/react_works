
import { useState } from "react";
import styled from "styled-components";

// Wrapper 스타일 정의 - <Wrapper>
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
`

const Block = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 8px;
  cursor: pointer;
`

const Blocks = () => {
  // 클릭한 블록의 색상을 저장하는 상태(초기화-null)
  const [clicked, setClicked] = useState(null);

  // 클릭된 글자 색상 상태
  const [textColor, setTextColor] = useState('black');
 
  const handleClick = (color) => {
    setClicked(color);
    setTextColor(color);
  }

  return(
    <Wrapper>
      <Block
        color="#f00"
        onClick={() => handleClick('red')}
      />
      <Block
        color="#0f0"
        onClick={() => handleClick('green')}
      />
      <Block
        color="#00f"
        onClick={() => handleClick('blue')}
      />
      {clicked && <p style={{color: textColor, fontSize:'24px'}}>클릭한 색상: {clicked}</p>}
    </Wrapper>
  )
}

export default Blocks;