import { useReducer } from "react";

//reducer 정의
const reducer = (state, action) => {
  console.log(state, action);

  // 액션의 타입에 따라 상태를 업데이트하는 로직
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    case "RESET":
      return { count: 0 }
    default:
      return state;
  }
}

const CountReducer = () => {
  // useReducer 훅을 사용하여 상태 관리
  // state는 객체, dispatch는 함수
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>카운터</h2>
      <h3>{state.count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </div>
  )
}

export default CountReducer;