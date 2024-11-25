import './App.css';
import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import RootLayout from './components/RootLayout';
import Hero from './Pages/auth/Hero';
import Login from './Pages/auth/Login'
import Signup from './Pages/auth/Signup'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './contexts/AppContext';
import Dashboard from './Pages/main/Dashboard';

const App = () => {
  const {state:{user}} = useContext(AppContext)

  if(!user){
    return(
      <>
      <ToastContainer theme='colored' position='top-center'/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path= '/signup' element ={<Signup/>} />
      </Routes>
      </>
    )
  }

  return ( 
    <>
    <ToastContainer theme = "colored" position='top-center'/>
    <Routes>
      <Route path='/' element ={<RootLayout/>}>
     <Route index element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
   )
}
 
export default App;

