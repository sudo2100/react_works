
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import SignIn from './components/SignIn'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          {/* 헤더 영역 */}
          <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/sign-in">로그인</Link>
            <Link to="/products">상품목록</Link>
          </div>

          {/* 본문 영역 */}
          <div className='contents'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/sign-in' element={<SignIn />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
