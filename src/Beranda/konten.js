import './konten.css'
import gambar1 from './event1.jpg'
import {Link} from 'react-router-dom'
import kepala from './pahasan.jpg'
import lomba from './lomba.jpg'

const konten = () => {
    return ( 
        <div className='konten'>
            <h3>Artikel Terbaru</h3>
        <div className='konten1'>
    
           
            <div className='konten2'>
                <div className='konten3'>
                    <img src={gambar1} alt=''/>
                    <div className='konten5'>
                    <h2>event</h2>
                    <p>  Bismillah ....Hallo sobat snakma 5, kang Mimin ada info penting nih untuk para ALUMNI yang hingga saat ini belum mengambil ijazahnya Pengambilan Ijazah ini</p>
                    <Link className='konten' to="/event">Selengkapnya</Link>
                    </div>
                </div>
                <div className='konten4'>
                    <img src={lomba} alt=''/>
                    <div className='konten5'>
                    <h2>lomba</h2>
                    <p>  Bismillah ....Hallo sobat snakma 5, kang Mimin ada info penting nih untuk para ALUMNI yang hingga saat ini belum mengambil ijazahnya Pengambilan Ijazah ini</p>
                    <Link className='konten' to="/">Selengkapnya</Link>
                </div>
                </div>
                <div className='konten6'>
                    <img src={gambar1} alt=''/>
                    <div className='konten5'>
                    <h2>info PPDB</h2>
                    <p>  Bismillah ....Hallo sobat snakma 5, kang Mimin ada info penting nih untuk para ALUMNI yang hingga saat ini belum mengambil ijazahnya Pengambilan Ijazah ini</p>
                    <Link className='konten' to="/">Selengkapnya</Link>
               </div>
                </div>

                <div className='konten7'>
                    <img src={gambar1} alt=''/>
                    <div className='konten5'>
                    <h2>fasilitas</h2>
                    <p>  Bismillah ....Hallo sobat snakma 5, kang Mimin ada info penting nih untuk para ALUMNI yang hingga saat ini belum mengambil ijazahnya Pengambilan Ijazah ini</p>
                    <Link className='konten' to="/">Selengkapnya</Link>
               </div>
                </div>
                </div>
                <div className='konten11'>
                <div className='konten10'>
                   
                <img src={kepala} alt=''/>
                
                    
                    </div>
                        <h1>Sambutan Kepala Sekolah</h1>
                        <p>Selamat datang di dunia pendidikan SMKN 2 Bandung. Kami merasa sangat bangga mendapatkan perhatian dan kepercayaan dari Bapak-Ibu sekalian. Kami akan berupaya untuk dapat menjalankan amanah ini dengan baik agar pertanggung jawaban di hadapan Allah SWT kelak menjadi ringan.

Di sini kami mengajak anda para orang tua siswa untuk berpartisipasi membangun masyarakat pembelajar dalam rangka menyongsong era baru bagi anak-anak kita dan menjadikan anak-anak kita generasi yang mampu berkompetisi tanpa kehilangan wajah budaya dan moral.

Memasuki pergaulan global yang penuh dengan kompetisi ini, kita perlu menyiapkan mental anak-anak kita agar mampu bersaing dengan baik dengan memiliki moral/adab islami, kemandirian, kecerdasan, juga tentunya kreatifitas-inovasi sesuai tumbuh kembangnya.</p>
                
                
                </div>
               
        </div>
        </div>
     );
}
 
export default konten;