import { Routes, Route } from 'react-router-dom';
import Feter from "./components/bottom_bar";
import { Home,About,Todos,Form,Rform } from './Pages';
function App() {
  return (
  <div className='App'>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Todos' element={<Todos/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Form'element={<Form/>}></Route>
    <Route path='/Rform'element={<Rform/>}></Route>
  </Routes>
  <Feter />
  </div>
  );
}

export default App;


