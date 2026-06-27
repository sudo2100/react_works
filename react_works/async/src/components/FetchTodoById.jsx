import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchTodoById = () => {
  const {id} = useParams(); //URL에서 id 파라미터를 가져옴
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((result) => {
      setData(result);
      console.log(result);
    })
    .catch((error) => console.error(error)); //오류 처리
  }, [id])  //id가 바뀔때마다 렌더링(실행)

  return(
    <div>
      <h2>할 일(To-do) 데이터</h2>
      {data && (
        <div>
          <p>제목: {data.title}</p>
          <p>완료여부: {data.completed ? " ● 완료" : " ○ 미완료"}</p>
        </div>
      )}
    </div>
  )
}

export default FetchTodoById;