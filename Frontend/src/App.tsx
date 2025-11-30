import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Mpho' element={<Home/>}/>
        <Route path='/Mpho/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
