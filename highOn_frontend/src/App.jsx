
import './App.css'
import { SignUp_page } from './components/SignUp-page'
import {Route,Routes} from "react-router-dom"
import { Login_page } from './components/Login-page'

function App() {
 

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<SignUp_page/>}/>
        <Route path='/login' element={<Login_page/>}/>
      </Routes>
     
    </div>
  )
}

export default App
