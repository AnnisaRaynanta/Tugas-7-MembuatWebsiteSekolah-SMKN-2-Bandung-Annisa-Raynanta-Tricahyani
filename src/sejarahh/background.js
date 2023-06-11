import './background.css'
import gambar2 from './sekolah1.jpg'
import gambar3 from './sekolah.jpg'



const About = () => {
    return ( 
      <div className='back'>
     <img src={gambar2} alt=''/>
        <div className='back1'>
            <h1>Sejarah SMK Negeri 2 Bandung</h1>
        </div>

        <div className='sejarah'>
        <img src={gambar3} alt=''/>
        <div className='sejarah1'>
        <h1>Sejarah Singkat</h1>
        <p>
SMK Negeri 2 Kota Bandung berawal dari nama besar STM Negeri 1 Bandung.

Berdasarkan dari Surat Putusan Menteri Pendidikan, Pengadjaran, dan Kebudayaan No.3835/B.II.1951 yang tertanggal 30 Agustus 1951, diputuskan TMT 01 Agustus 1951 untuk dibuka : Sekolah Teknik Menengah (STM) Negeri (Bagian Bangunan, Mesin, dan Listrik) di Bandung.

Maka berdasarkan surat keputusan tersebut didirikanlah STM Negeri I Bandung pada tahun 1951 di Jl. DR.Wahidin No.2 Bandung yang dipimpin oleh : W.G. Zweekhorst.

Berdasarkan surat keputusan Kepala Kanwil Departemen Pendidikan dan Kebudayaan Propinsi Jawa Barat No.148/I02.Kep/R.77 tertanggal 16-12-1977, memutuskan untuk memindahkan STM Negeri I Bandung ke Jalan Ciliwung No. 4 Bandung.

Pada saat itu di Jalan Ciliwung no.4 pada awalnya adalah sebuah ST Negeri 1 yang didirikan sejak zaman Belanda (tahun tidak tercatat) dan STM Negeri IV Bandung.
</p>
        </div>
        </div>
        <div className='visimisi'>
          <div className='visi'>
            <h1>Visi</h1>
          <p>Sebagai lembaga pendidikan kejuruan profesional dan berwawasan lingkungan yang mampu menghasilkan lulusan yang bertaqwa, cerdas, kompetitif dan kompeten.</p>
          </div>
          <div className='misi'>
          <h1>Misi</h1>
            <p>
              1. Mengembangkan sikap kewirausahaan yang jujur dan bertanggung jawab <br />
              2. Memberikan mutu layanan pendidikan kejuruan yang berkualitas dan profesional <br />
              3. Meningkatkan kebekerjaan lulusan serta dapat Mengembangkan sikap profesional sesuai bidang keahliannya <br />
              4. Menghasilkan lulusan yang mampu memilih karir, berkompeten, produktif, dan dapat mengembangkan diri <br />
              5. Menciptakan lingkungan sekolah yang kondusif <br />
              6. Menjalin kerja sama dengan dunia usaha/dunia industri serta instansi terkait
            </p>     
          </div>
        </div>
      </div>
     );
}
 


export default About;