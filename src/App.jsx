import { useState } from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  
  return (
    <div >
      <Header />
      <Content />
      {/* <Welcome />  */}
      <Hello />
      <Footer />
    </div>
  )
}

export default App
