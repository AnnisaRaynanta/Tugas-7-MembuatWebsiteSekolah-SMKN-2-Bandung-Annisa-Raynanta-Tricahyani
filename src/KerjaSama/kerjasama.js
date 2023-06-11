import './kerjasama.css'
import Gambar from './logo-1.jpg'
import Gambar1 from './logo-angkasa-malaysia.jpg'
import Gambar2 from './logo-jieac.jpg'
import Gambar3 from './logo-komatsu.jpg'

const kerjasama = () => {
    return ( 
        <div className='kerja'>
            <div className='sama'>
            <img src={Gambar} alt=''/>
            <div className='sama1'>
            <h1>PT. Asian Welding Specialist (AWS)</h1>
            <p>jl. Ciliwung no 4 cihapit bandung, jawa barat, 40114</p>
            </div>
            </div>

            <div className='sama12'>
            <div className='sama2'>
            <h1>Angkatan Koperasi Kebangsaan Malaysia Berhad</h1>
            <p>Wisma Ungku A. Aziz, Jalan SS6/1 47301 Kelana Jaya, Petaling Jaya, Selangor</p>
            </div>
            <img src={Gambar1} alt=''/>
            </div>

            <div className='sama'>
            <img src={Gambar2} alt=''/>
            <div className='sama1'>
            <h1>PT. JIAEC</h1>
            <p>Jl. Ir H. Juanda Kav. Adikarya No. 20, Bakti Jaya, Sukmajaya, Kota Depok, Jawa Barat 16418</p>
            </div>
            </div>
            
            <div className='sama12'>
            <div className='sama2'>
            <h1>PT Komatsu Indonesia</h1>
            <p>Jalan Raya Cakung, Cilincing Km 4, Jakarta 14140</p>
            </div>
            <img src={Gambar3} alt=''/>
            </div>
            
            
           
        </div>
     );
}
 


export default kerjasama;