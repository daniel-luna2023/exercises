import { useEffect, useState} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';


function App() {
return (
  < >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<h1>login</h1>}/> 
    </Routes>
 </>
  
);

}
export default App
