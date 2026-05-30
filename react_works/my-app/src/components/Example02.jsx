
export default function Example02(){
  const items = ['야구', '축구', '농구'];

  return(
    <div>
      <h2>리스트 렌더링</h2>
      {/* {items.map((item, index) => (
        <p key={index}>{index+1}.{item}</p>
      ))} */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}