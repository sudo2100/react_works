import { useState, useRef } from "react";

const CountRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);  //참조 객체 생성
  let countVar = 0;   //일반 변수

  console.log("렌더링..");
  console.log(countRef); //{current: 0}
  
  // 상태 증가
  const increaseCount = () => {
    setCount(count + 1);
  }

  // 참조 증가(랜더링이 되더라도 값을 저장함)
  const increaseCountRef = () => {
    countRef.current += 1;  //countRef.current = countRef.current + 1
    console.log("Ref:", countRef.current);
  }

  // 일반 변수 증가(랜더링 될때마다 초기, 저장 안됨)
  const increaseCountVar = () => {
    countVar += 1;  //countVar = countVar + 1
    console.log("var:", countVar);
  }

  return(
    <div>
      <h3>State: {count}</h3>
      <h3>Ref: {countRef.current}</h3>
      <h3>Var: {countVar}</h3>

      <button onClick={increaseCount}>State 증가</button>
      <button onClick={increaseCountRef}>Ref 증가</button>
      <button onClick={increaseCountVar}>Var 증가</button>
    </div>
  )
}

export default CountRef;