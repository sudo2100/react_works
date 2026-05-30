import { useState } from "react";

const Drinks = () => {
  //음료 리스트 상태 관리
  const [drinks, setDrinks] = useState(['커피', '콜라']);

  //음료 추가 핸들러
  const addDrink = () => {
    setDrinks([...drinks, '딸기쥬스']);
  }

  return(
    <div>
      <h2>음료 관리</h2>
      <h4>현재 음료: {drinks.join(', ')}</h4>
      <button onClick={addDrink}>음료 추가</button>
    </div>
  )
}

export default Drinks;