import './App.css'
import Connection from './Components/Connection'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
import Login from './Components/Login'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/' element={<Connection/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
