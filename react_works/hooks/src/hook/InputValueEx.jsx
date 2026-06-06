import { useState } from "react";

export default function InputValueEx(){
  const [text, setText] = useState("")

  const handleInputValue = (e) => {
    setText(e.target.value);
  }

  return(
    <div>
      <h2>입력값 출력</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputValue}
        placeholder="글자 입력"
      />
      <h3>입력값: {text}</h3>
    </div>
  )
}