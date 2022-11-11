import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Landing from '../Landing';
import Registration from '../registration';
import Login from '../login';
import Home from '../Home';
import Complain from '../Complain';
import Summary from './summary';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='content'>
        <Routes>
          <Route path='/' element={ <Landing/> }/>
            <Route path='/Registration' element={ <Registration/> }/>
            <Route path='/Login' element={ <Login/> }/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Complain' element={<Complain/>}/>
            <Route path='/Summary' element={<Summary/>}/>
          </Routes>
        </div>
          
        </div>
      
    </BrowserRouter>
  );
}

export default App;
