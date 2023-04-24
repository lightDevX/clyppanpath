import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'


function App() {


  return (
    // <div className="App">

    // </div>
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
