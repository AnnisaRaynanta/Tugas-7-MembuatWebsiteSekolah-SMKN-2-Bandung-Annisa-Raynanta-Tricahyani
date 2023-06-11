import './navbar.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import gambar from './smkn2.jpeg'
import Drop from './dropdown'

const Navbar = () => {

 const[drop, setDrop] = useState(false)

 
    return ( 
      
  <div className='navbar'>
      <h1 className='drop-button' onClick={()=>{setDrop(!drop)}}>x</h1>
      <Drop open={drop}/>
    <div className='nav'>

            <Link className='navigasi' to="/">beranda</Link>
           
            <div class="dropdown">
  <span> profil</span>
  <div class="dropdown-content">
  <p> <Link className='add' to="/Sejarah">sejarah sekolah</Link></p>
  <p> <Link className='add' to="/KerjaSama">kerjasama</Link></p>
  </div>
</div>
           
            <Link className='navigasi' to="/Jurusan">keahlian</Link>

            <div class="dropdown">
  <span>link terkait</span>
  <div class="dropdown-content">
  <p> <Link className='add' to="https://forms.gle/fqACv2xePY5HgATt9">link PPDB</Link></p>
  <p> <Link className='add' to="https://youtu.be/8CgZfaxn4uQ">You Tube</Link></p>
  <p> <Link className='add' to="https://instagram.com/smkn2bandung?igshid=NTc4MTIwNjQ2YQ==">Instagram</Link></p>
  </div>
</div>


            </div>
            <div className='logo'>
                <img src={gambar} alt=''/>
                
                </div>
                <div className='logo1'>
                  <p>(022)7234285</p>
                  <p>humas@smkn2bandung.sch.id</p>
                </div>
        </div>
     );
}
 
export default Navbar;