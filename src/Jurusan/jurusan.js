import './jurusan.css'
import gambar3 from './download.jpg'

const jurusan = () => {
    return(
        <div class="cards">
  <div class="card">
    <h2 class="card-title">Teknik Mesin</h2>
    <img src={gambar3} alt=''/>
    <p class="card-desc">teknik mesin adalah suatu disiplin ilmu teknik yang menggabungkan fisika teknik dan prinsip-prinsip matematika dengan ilmu material (bahan) untuk mendesain, menganalisa dan membuat serta mempertahankan sistem mekanis</p>
  </div>
  <div class="card">
    <h2 class="card-title">Teknik Komputer dan Jaringan</h2>
    <img src={gambar3} alt=''/>
    <p class="card-desc">dibuka sejak tahun 2005, bergerak dibidang informasi dan teknologi dengan fokus mengembangkan peserta didiknya agar mampu melakukan perakitan Komputer, instalasi sistem operasi (windows dan linux), instalasi sofware, perbaikan Komputer, membuatr jaringan LAN dan internet meliputi instalasi, perancangan dan troubleshooting jaringan</p>
  </div>
  <div class="card">
    <h2 class="card-title">Pengembangan Perangkat lunak dan gim </h2>
    <img src={gambar3} alt=''/>
    <p class="card-desc">perangkat lunak dan gim membekali peserta didik menguasai keterampilan/skil uatama dalam membuat aplikasi baik untuk dekstop (windows dan linux), mobile (android dan IOS) dan website serta membuat aplikasi database, kemampuan dasar instalasi sistem operasi (windows dan linux) dan troubleshooting computer</p>
  </div>
  <div class="card">
    <h2 class="card-title">Teknik pengelasan</h2>
    <img src={gambar3} alt=''/>
    <p class="card-desc">peserta didik dibekali dengan sikap dan budaaya kerja industri PT.Komatsu, serta kopetensi tingkat menengah dalam bidang pengelasan</p>
  </div>
  <div class="card">
    <h2 class="card-title">desain komunikasi dan visual</h2>
    <img src={gambar3} alt=''/>
    <p class="card-desc">desain komunikasi dan visual adalah cabang ilmu desain yang mempelajari konsep komunikasi dan ungkapan kreatif, teknik dan media dengan memanfaatkan elemen-elemen visual ataupun rupa untuk menyampaikan pesan untuk tujuan tertentu</p>
  </div>
  <div class="card">
    <h2 class="card-title">animasi </h2>
    <img src={gambar3} alt=''/>
    <p class="card-desc">mempersiapkan peserta didik menjadi tenaga terampil dibidang seni rupa dan animasi yang dibekali kemampuan seni dan desain, kemampuan menggambar manual serta digital, penguasaan sofware animasi, penguasaan teknik animasi 2D dan 3D, dan spesial efek, fotografi, sinematografi, dan prouksi film animasi</p>
  </div>
</div>
    );
}

export default jurusan;