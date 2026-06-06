import './App.css'
import Season from './components/Season'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Test01 from './practice/Test01'
import Header from './practice/Header'
import Main from './practice/Main'
import Footer from './practice/Footer'
import Example03 from './components/Example03'
import InputValue from './components/InputValue'
import Test02 from './practice/Test02'
import Dog from './components/Dog'
import Dog2 from './components/Dog2'
import Box from './children/Box'
import Profile from './children/Profile'

function MyButton(){
  return (
    <div>
      {/* <p>버튼 컴포넌트</p> */}
      <button>목록보기</button>
    </div>
  )
}

function App() {

  return (
    <>
      <section id="center">
        {/* <h2>리엑트 시작하기</h2> */}
        {/* <Season /> */}
        {/* <Example01 /> */}
        {/* <Example02 /> */}
        {/* <Test01 /> */}
        {/* <Header />
        <Main />
        <Footer /> */}
        {/* <Test02 /> */}
        {/* props 연습 */}
        {/* <Dog 
          breed="말티즈"
          age={2}
        />
        <Dog2 
          breed="진돗개"
          age={5}
        /> */}
        {/* <Box>
          <h3>박스 안의 내용</h3>
          <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
        </Box> */}
        <Profile />
      </section>

      <section>
        {/* <h2>JSX 문법 배우기</h2> */}
        {/* <MyButton /> */}
        {/* <Example03 /> */}
        {/* <InputValue /> */}
      </section>
    </>
  )
}

export default App
