
import axios from "axios"
import { useState } from "react"

const AxiosPost = () => {
  const [title, setTitle] = useState("");

  //입력값 변경시 상태 업데이트
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  return(
    <div>
      <h2>할 일 추가</h2>
      <input 
        type="text" 
        placeholder="할 일 입력"
        value={title}
        onChange={handleInputChange}
      />
      <button>추가</button>
      <p>입력된 할일: {title}</p>
    </div>
  )
}

export default AxiosPost