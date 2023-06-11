import './navbar.css'
import {Link} from 'react-router-dom'
const Drop = ({open}) => {
    return ( 
        <div className={open?"drop-show":"drop"} id='drop'>
         

<Link className='navigasi' to="/">beranda</Link>

<div class="dropdown">
<span> profil</span>
<div class="dropdown-content">
<p> <Link className='add' to="/about">sejarah sekolah</Link></p>
<p> <Link className='add' to="/about">kerjasama</Link></p>
</div>
</div>

<Link className='navigasi' to="/kontak">keahlian</Link>

<div class="dropdown">
<span>link terkait</span>
<div class="dropdown-content">
<p> <Link className='add' to="https://forms.gle/fqACv2xePY5HgATt9">link PPDB</Link></p>
<p> <Link className='add' to="https://youtu.be/8CgZfaxn4uQ">You Tube</Link></p>
<p> <Link className='add' to="https://instagram.com/smkn2bandung?igshid=NTc4MTIwNjQ2YQ==">Instagram</Link></p>
</div>
</div>

<p className={open?"show":"hide"}>(022)7234285 humas@smkn2bandung.sch.ids</p>


</div>
       
     );
}
 
export default Drop;