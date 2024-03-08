import './App.css'
import Connection from './Components/Connection'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
import Signup from './Components/Signup'
import LogIn from './Components/Login'
import LogOut from './Components/LogOut'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/' element={<Connection/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/logout' element={<LogOut/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
