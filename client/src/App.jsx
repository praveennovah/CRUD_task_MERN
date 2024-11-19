import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import CreateUser from './CreateUser';
import UdateUser from './UdateUser';
import Users from './Users';
function App() {
  const [count, setCount] = useState(0)
=======
import CreateUser from './CreateUser.jsx';
import UpdateUser from './UpdateUser';
import Users from './Users';
function App() {

>>>>>>> initial commit

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users/>}></Route>
            <Route path='/create' element={<CreateUser/>}></Route>
<<<<<<< HEAD
            <Route path='/update/:id' element={<UdateUser/>}></Route>
          </Routes>
      </BrowserRouter>
=======
            <Route path='/update/:id' element={<UpdateUser/>}></Route>
          </Routes>
      </BrowserRouter> 
>>>>>>> initial commit
    </div>
  )
}

export default App
