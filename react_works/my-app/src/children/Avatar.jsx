
/* 프로필 사진을 보여주는 컴포넌트
   props로 person 객체를 받아서,
   imageUrl과 name을 사용하여 프로필 사진을 보여줌*/
const Avatar = ({ person }) => {

  return(
    <div>
      {/* <h3>여기에 프로필 사진</h3> */}
      <img 
        className="avatar"
        src={person.imageUrl} 
        alt={person.name}
        width={400}
      />
    </div>
  )
}

export default Avatar;