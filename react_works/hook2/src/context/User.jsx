import { createContext } from "react";
import UserChild from "./UserChild";

// UserContext를 객체로 초기화하여 생성(외부에 내보내기)
export const UserContext = createContext({});

const User = () => {
  const user = {
    name: "우영우",
    age: 33
  }

  return(
    <div>
      <h2>User 컴포넌트 입니다.</h2>
      <UserContext.Provider value={user}>
        <UserChild />
      </UserContext.Provider>
    </div>
  )
}

export default User;