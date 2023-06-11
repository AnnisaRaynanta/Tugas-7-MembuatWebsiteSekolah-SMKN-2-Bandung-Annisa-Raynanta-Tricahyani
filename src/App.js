import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
// import Login from './login/login';
import KerjaSama from './KerjaSama/register';
import Beranda from './Beranda/homepage';
import Sejarah from './sejarahh/about'
import Jurusan from './Jurusan/keahlian'
import Event from './Beranda/event'
import Event1 from './Beranda/event1'







const App = ()=>{
    return(
       <Routes>
    {/* <Route path='/login' element={<Login/>}/> */}
    <Route path='/KerjaSama' element= {<KerjaSama/>}/>
    <Route path='/' element={<Beranda/>}/>
    <Route path='/Sejarah' element={<Sejarah/>}/>
    <Route path='/Jurusan' element={<Jurusan/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/event1' element={<Event1/>}/>
    
       </Routes>

    )
}

export default App;