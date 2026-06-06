import { useState } from "react";
import DrinkList from "./DrinkList";

const Drinks2 = () => {
  //음료 리스트 상태 관리 - 빈 리스트(초기화)
  const [drinks, setDrinks] = useState([]);

  //입력값 상태 관리 - 빈 문자열(초기화)
  const [inputValue, setInputValue] = useState('')

  //입력값 변경 함수
  const inputValueChange = (e) => {
    console.log("음료:", e.target.value); //event 속성
    setInputValue(e.target.value);
  }

  //음료 추가 핸들러
  const addDrink = () => {
    //입력값은 newDrink에 저장
    const newDrink = inputValue;

    //입력 필드 검사(유효성 검사)
    if(newDrink == ''){
      alert("음료를 입력해주세요.");
      return;  //즉시 종료
    }

    setDrinks([...drinks, newDrink]);
    //입력값 초기화
    setInputValue('');
  }

  return(
    <div>
      <h2>음료 관리</h2>
      <input 
        type="text" 
        placeholder="음료 이름을 입력하세요"
        value={inputValue}
        onChange={inputValueChange}
      />
      {/* <p>입력된 음료: {inputValue}</p> */}
      <button onClick={addDrink}>음료 추가</button>

      {/* 음료 목록 */}
      {/* DrinkList 컴포넌트 연결 - drinks props 사용 */}
      <DrinkList drinks={drinks} />
      {/* <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Drinks2;