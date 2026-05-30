import { useState } from "react";

const Counter = () => {
  //숫자 세기 상태 관리 선언 - 초기화 숫자 0
  //변수-count, 함수-setCount()
  const [count, setCount] = useState(0)

  //증가 핸들러 함수
  const increment = () => {
    setCount(count + 1);
  }

  //감소 핸들러 함수
  const decrement = () => {
    setCount(count - 1)
  }

  //초기화 함수
  const reset = () => {
    setCount(0);
  }

  return(
    <div>
      <h2>Counter</h2>
      <h3>현재 count: {count}</h3>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
      
      {/* <button onClick={() => setCount(count+1)}>증가</button>
      <button onClick={() => setCount(count-1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button> */}
    </div>
  )
}

export default Counter;