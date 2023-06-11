import {Link} from 'react-router-dom'
import './footer.css'


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="satu">
                <h1 id='text6'>Tautan Berguna</h1>
                <Link className='link1' to="/">&gt; Beranda</Link>
                <div class="dropdown1">
  <span> &gt;profil</span>
  <div class="dropdown-content1">
  <p> <Link className='add1' to="/about">sejarah sekolah</Link></p>
  <p> <Link className='add1' to="/about">kerjasama</Link></p>
  </div>
</div>
            <Link className='link1' to="/kontak">&gt; keahliannya</Link>
            <div class="dropdown1">
  <span>&gt;link terkait</span>
  <div class="dropdown-content1">
  <p> <Link className='add1' to="https://forms.gle/fqACv2xePY5HgATt9">link PPDB</Link></p>
  <p> <Link className='add1' to="https://youtu.be/8CgZfaxn4uQ">You Tube</Link></p>
  <p> <Link className='add1' to="/about">Instagram</Link></p>
  </div>
</div>
            
            </div>
            <div className="dua">
                <h1 id='text7'>SMKN 2 Bandung</h1>
                <p id='text9'> Jl. Ciliwung No.4 RT.02 RW.03, Kelurahan Cihapit Kecamatan Bandung Wetan, Bandung 40114</p>
               <p>Nomer Telfon : (022) 7234285, 4231857</p>
               <p>Email :  humas@smkn2bandung.sch.id</p>
            </div>
            
        </div>
     );
}
 
export default Footer;