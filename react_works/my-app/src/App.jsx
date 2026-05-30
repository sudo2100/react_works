import './App.css'
import Season from './components/Season'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Test01 from './practice/Test01'
import Header from './practice/Header'
import Main from './practice/Main'
import Footer from './practice/Footer'
import Example03 from './components/Example03'

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
      </section>

      <section>
        {/* <h2>JSX 문법 배우기</h2> */}
        {/* <MyButton /> */}
        <Example03 />
      </section>
    </>
  )
}

export default App
