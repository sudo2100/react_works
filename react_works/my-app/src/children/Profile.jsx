import Avatar from "./Avatar";
import profilePhoto from "../assets/person.jpg"
import Card from "./Card";

// 프로필 페이지를 보여주는 컴포넌트
const Profile = () => {

  return(
    <Card>
      {/* <h2>Card UI 구현</h2> */}
      <Avatar 
        person={{
          name: '게이츠',
          imageUrl: profilePhoto
        }}
      />
    </Card>
  )
}

export default Profile;