import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  //할 일값 상태 관리
  const [todos, setTodos] = useState([]);

  // 입력값 상태 관리
  const [inputValue, setInputValue] = useState("");

  // 입력값 변경 핸들러 함수
  const handleInputChange = (e) => {
    // console.log("입력된 글자:", e.target.value);
    setInputValue(e.target.value);
  }
  console.log("리스트의 크기:", todos.length); //0
  //console.log(10 === '10');  //false
  
  // 할 일 추가 함수
  const handleAddTodo = () => {
    // 할 일 객체 생성 
    if(inputValue.trim() === ''){ //trim()은 공백을 삭제함
      alert("할 일을 입력하세요.");
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');  //입력 필드 초기화
  }

  // 할 일 완료 체크
  const handleToggleComplete = (id) => {
    /*
      해당 id를 가진 할 일의 completed 상태를 토글하는 코드
      todos 배열을 순회하면서 id가 일치하는 할 일의 completed 값을 반전시킴
      id가 일치하지 않는 할 일은 그대로 유지
    */
    setTodos(
      todos.map((todo) => (
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      ))
    )
  }

  return (
    <>
      <section className='app'>
        <h2>할일 관리</h2>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='할 일을 입력하세요' 
        />
        <button onClick={handleAddTodo}>추가</button>
        {/* <p>입력된 할일: {inputValue}</p> */}
        {/* 할 일 목록 */}
        <TodoList 
          todos={todos}
          onToggleComplete={handleToggleComplete}
        />
      </section>
    </>
  )
}

export default App
