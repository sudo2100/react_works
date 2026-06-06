import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import Car from './components/Car'
import Drinks from './components/Drinks'
import Drinks2 from './components/Drinks2'
import UserList from './components/UserList'
import UseEffectEx from './hook/UseEffectEx'
import Like from './hook/Like'
import InputValueEx from './hook/InputValueEx'
import SignIn from './hook/SignIn'

function App() {

  return (
    <>
      <section className='app'>
        {/* <h2>상태 관리 실습</h2> */}
        {/* <Counter /> */}
        {/* <Car /> */}
        {/* <Drinks /> */}
        {/* <Drinks2 /> */}
        {/* <UserList /> */}
        {/* <UseEffectEx /> */}
        {/* <Like /> */}
        {/* <InputValueEx /> */}
        <SignIn />
      </section>
    </>
  )
}

export default App
