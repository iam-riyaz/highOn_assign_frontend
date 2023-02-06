
import './App.css'
import { SignUp_page } from './components/SignUp-page'
import {Route,Routes} from "react-router-dom"
import { Login_UserPage } from './components/Login_user'
import { Login_OwnerPage } from './components/Login_owner'
import { Map_page } from './components/Map_page'
import { Owner_page } from './components/Owner_page'
import { User_page } from './components/User_page'

function App() {
 

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<SignUp_page/>}/>
        <Route path='/login_user' element={<Login_UserPage/>}/>
        <Route path="/login_owner" element={<Login_OwnerPage/>}/>
        <Route path="/map_page" element={<Map_page/>}/>
        <Route path="/owner_page" element={<Owner_page/>}/>
        <Route path="/user_page" element={<User_page/>}/>


      </Routes>
     
    </div>
  )
}

export default App
