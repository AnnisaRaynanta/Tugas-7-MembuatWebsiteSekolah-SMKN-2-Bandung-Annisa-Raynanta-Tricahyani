import Navbar from './navbar'
import './event.css'
import gambar111 from './event2.jpg'
import gambar from './fast-backward.png'
import {Link} from 'react-router-dom'
import gambar1 from './fast-forward.png'
import Footer from '../Jurusan/footer'








const Event = () => {
    return ( 
        <>
        <Navbar/>

        <div className='event'>
   
    
    <h2>GELORA VEST 2022</h2>
    
   <div className='evv'>
    <div className='ev'>
    
        <img src={gambar111} alt=''/>
        </div>

        <div className='gambar'>
       
       
        <p>SMK NEGERI 2 BANDUNG Berpartisipasi pada acara EXPLORE SMK JABAR JUARA 2022 yang dilaksanakan di Bandara Internasional Jawa Barat ( BIJB) Kertajati.

Berbagai karya dari siswa SMK NEGERI dan Swasta di Jawa Barat dipamerkan di Explore SMK Jabar Juara, kegiatan tersebut dihadiri ribuan pengunjung yang dimulai pada tanggal 15 Desember hingga 17 Desember 2022 .

Lebih dari 100 Booth atau Tenant yang memamerkan produk SMK mulai dari kategoru Teknologi, Pertanian, kelautan, dan lain sebagainya, SMK NEGERI 2 termasuk pada kategori Teknologi.

SMK NEGERI 2 BANDUNG tidak hanya ikut bergabung pada Booth melainkan SMK NEGERI 2 BANDUNG juga ikut serta memeriahkan kegiatan tersebut dengan mengirimkan talent pada bidang musik. Acara berlangsung dengan meriah dan penuh antusias dari para pengunjung , dalam gelaran ini berupaya mewujudkan semangat SMK BISA SMK HEBAT SMK JUARA</p>

<div className='button'>
<Link className='event0' to="/event"> <img src={gambar} alt=''/> </Link>
        <Link className='event00' to="/">Menu</Link>
        <Link className='event0' to="/event1"> <img src={gambar1} alt=''/></Link>
        </div>
        </div>
        </div>
      </div>

      <Footer/>
        </>
     
     );
}
 


export default Event;