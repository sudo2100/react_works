
const Dog = (props) => {
  //구조 분해 할당
  const {breed, age} = props;

  return(
    <div>
      <h2>강아지</h2>
      <p>품종:{breed}</p>
      <p>나이:{age}</p>
    </div>
  )
}

export default Dog;