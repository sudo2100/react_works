import heroImg from '../assets/hero.png'

const Season = () => {
  // 변수 출력시 중괄호{} 사용
  let season = "봄"

  return(
    <div>
      <h3>현재 계절: {season}</h3>
      <img  
        src={heroImg}
        alt="메인이미지"
        width={300}
      />
    </div>
  )
}

export default Season;