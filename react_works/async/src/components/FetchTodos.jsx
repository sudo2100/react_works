import { useEffect, useState } from "react";

const FetchTodos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json()) //json -> 자바스크립트 객체로 변환
      .then((result) => {
        setData(result); //변환된 데이터를 상태에 저장
        console.log(result);
        
      })
      .catch((error) => console.log(error)); //에러 처리
  }, []); //마운트될때 한 번만 실행

  return(
    <div>
      <h2>할 일 데이터 목록</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchTodos;