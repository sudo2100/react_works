
export default function Example03(){

  //이벤트 핸들러 - 참조 함수
  const handleClick = () => {
    alert("버튼2가 클릭됨!");
  }

  //인사하기
  const greet = (name) => {
    //alert(`안녕하세요, ${name}님!`);
    console.log(`안녕하세요, ${name}님!`); 
  }

  return(
    <div>
      <h2>버튼 이벤트</h2>
      <div>
        {/* 인라인 핸들러 - 이벤트 속성안에 함수를 직접 생성하는 방식 */}
        <button onClick={() => alert('버튼1이 클릭됨!')}>버튼1</button>
      </div>

      <div>
        <button onClick={handleClick}>버튼2</button>
      </div>

      <div>
        <button onClick={() => greet('김도영')}>인사하기</button>
      </div>
    </div>
  )
}