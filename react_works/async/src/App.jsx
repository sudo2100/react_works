
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchTodos from './components/FetchTodos'
import FetchTodoById from './components/FetchTodoById'
import Home from './layouts/Home'
import About from './layouts/About'
import Board from './layouts/Board'
import BoardById from './layouts/BoardById'
import AxiosTodos from './components/AxiosTodos'
import AxiosTodoById from './components/AxiosTodoById'
import AxiosPost from './components/AxiosPost'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            {/* fetch() 사용 */}
            {/* <Route path='/' element={<FetchTodos />} />
            <Route path='/:id' element={<FetchTodoById />} /> */}

            {/* axios() 사용 */}
            <Route path='/axios' element={<AxiosTodos />} />
            <Route path='/axios/:id' element={<AxiosTodoById />} />
            <Route path='/axios-post' element={<AxiosPost />} />
          </Routes>

          {/* 연습 문제 */}
          {/* <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/board">Board</Link>
          </div> */}
          {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/board' element={<Board />} />
            <Route path='/board/:id' element={<BoardById />} />
          </Routes> */}
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
