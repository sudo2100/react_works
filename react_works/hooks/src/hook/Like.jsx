import { useState } from "react"

export default function Like(){
  const [likeCount, setLikeCount] = useState(0);

  const doClick = () => {
    setLikeCount(likeCount + 1);
  }

  return(
    <div>
      <h2>좋아요 버튼 만들기</h2>
      <button type="button" onClick={doClick}>좋아요</button>
      <span>{likeCount}</span>
    </div>
  )
}