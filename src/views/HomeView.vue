<template>
   <main class="md:pt-10 lg:pt-20 ">
      <section class="lg:flex lg:flex-col-reverse pl-5 pr-5 lg:pr-20 lg:pl-20">

            <div class="flex justify-center relative lg:-top-60 lg:justify-end">
               <div v-for="(data, idx) in cardSvg" :key="idx">
                  <img :src="require(`@/assets/svg/${data.name}.svg`)" alt="avatar" :class="'image-hero-'+idx"  />
               </div>
            </div>

         <div class="text-center lg:text-left relative">
            <p class="text-secondary text-4xl lg:text-5xl font-bold">Ubah Hidupmu</p>
            <p class="text-4xl lg:text-5xl font-bold">Sekarang Juga</p>
            <p class="text-center lg:text-left mt-5 lg:w-1/2 text-slate-500">Belajar menjadi software engineer secara online/remote selama 3 - 6 bulan sampai diterima kerja, tanpa bayar di depan (Income Share Agreement).</p>
            <button class="bg-secondary hover:bg-orange-500 p-4 text-sm font-bold text-white mt-5 rounded-lg">Daftar Sekarang</button>
         </div>
      </section>

      <section class="mt-10 lg:-mt-40 pl-5 pr-5 lg:pr-20 lg:pl-20 mb-10">
         <div class="flex justify-between w-full flex-wrap">
            <div class="flex items-center mb-5 lg:mb-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
               <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
               </svg>
               <p class="text-sm ml-3 font-bold text-slate-700 w-24 lg:w-auto">Supportive Trainer</p>
            </div>
            <div class="flex mb-5 items-center lg:mb-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
               <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clip-rule="evenodd" />
               </svg>
               <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Kurikulum Sesuai Industri</p>
            </div>
            <div class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
               <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
               <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
               </svg>
               <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Jaminan Disalurkan Kerja</p>
            </div>
            <div class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-slate-400 p-1 rounded-full">
               <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
               </svg>
               <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Ulang Kelas Gratis</p>
            </div>
         </div>
      </section>

      <section class="bg-slate-200 pb-10">
         <div class="p-10">
            <p class="text-center text-xl font-bold lg:text-2xl">500+ lulusan bekerja di perusahaan ini</p>
            <p class="text-center text-xs lg:text-lg text-slate-700">Fazztrack menjamin lulusan mendapat kesempatan membagun karir di perusahaan impian.</p>
         </div>
         
         <div class="flex flex-wrap p-1 items-center justify-between lg:p-10">
            <div v-for="(data, idx) in mitra" :key="idx">
               <img :src="data.image" alt="logo" class="h-24 w-24 lg:h-auto lg:w-auto lg:p-3" />
            </div>
            <p class="text-2xl font-bold p-6">600+</p>
         </div>
      </section>

      <section class="p-5 lg:p-20 lg:pb-5">
         <p class="text-center text-xl font-bold lg:text-2xl">Pilihan Bootcamp Fazztrack</p>
         <p class="text-center text-xs lg:text-lg text-slate-700">Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk kamu siap bekerja.</p>
         <div class="md:flex md:justify-between md:flex-wrap">
            <div v-for="(data, idx) in curicurumArr" :key="idx">
               <CardSelectBootcampComponent :image="data.image" :title="data.title" :desc="data.desc" class="mt-4" />
            </div>
         </div>
      </section>

      <section class="p-5 lg:p-20 ">
         <div class="bg-slate-200 p-10">
            <div class="md:flex flex-row-reverse">
               <img :src="require('@/assets/svg/minicamp.svg')" alt="" />
               <div>
                  <p class="font-bold text-center pt-4 md:pt-0 md:text-left md:text-xl lg:text-2xl">Tidak memiliki banyak waktu?</p>
                  <p class="text-center text-sm pt-4 text-slate-700 md:text-left md:text-xl md:pb-4 md:w-[90%]">Coba program terbaru Fazztrack Mini Bootcamp! Belajar dengan menyesuaikan waktumu dan bisa langsung disalurkan kerja.</p>
                  <div class="flex justify-center md:inline pt-4">
                     <button class="bg-primary p-3 rounded-md text-sm text-white hover:bg-[#2557a7]" v-on:click="minicampHandler">Lihat Mini Bootcamp</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section class="bg-primary">
      <div class="p-5 lg:p-20 md:flex flex-wrap md:justify-between">
            <div>
               <p class="text-white font-bold text-center md:text-left md:text-2xl">Keunggulan Fazztrack</p>
               <p class="text-white text-sm text-center md:text-left md:text-xl w-full md:w-72">Bootcamp Fazztrack akan membimbing kamu menjadi Software Engineer profesional sampai di salurkan kerja.</p>
            </div>
               <div v-for="(data, idx) in superiorityArr" :key="idx" :class="idx >= 2 ? 'md:mt-5' : ''">
                  <CardSuperiorityComponent :title="data.title" :image="data.image" :desc="data.desc"   />
               </div>
            </div>
      </section>

      <section class="bg-[#fef3ec] p-5 lg:p-20">
         <div class="flex justify-center md:justify-start items-center">
            <p class="text-2xl font-bold">Alumni</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-secondary">
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
            <p class="text-2xl font-bold">Fazztrack</p>
         </div>
         <p class="text-slate-700 text-center md:text-left">Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja yang sudah mereka ikuti.</p>
      
            <div class="md:flex justify-between flex-wrap">
               <div v-for="(data, idx) in alumni" :key="idx">
                  <CardAlumniComponent :name="data.name" :instagram="data.instagram" :image="data.image" :desc="data.desc" :works="data.works"   />
               </div>
            </div>
            
      </section>

      <section class="p-5 lg:p-20">
         <div class="md:flex items-center justify-between">
            <div>
               <p class="text-2xl font-bold text-center md:text-left">Cerita Alumni Bootcamp</p>
               <p class="text-xl text-slate-700 text-center md:text-left">Cerita perjalanan heroik alumni bootcamp Fazztrack</p>
            </div>
            <button class="border-2 p-4 text-sm text-slate-800 font-bold hidden lg:inline">Lihat Selengkapnya</button>
         </div>
         <div class="lg:flex justify-between">
            <div v-for="(data, idx) in alumniStorysArr" :key="idx">
               <CardStoryAlumniComponent :image="data.image" :title="data.title" :desc="data.desc" />
            </div>
         </div>
         <div class="flex justify-center">
            <button class="border-2 p-4 text-sm text-slate-800 font-bold lg:hidden mt-10">Lihat Selengkapnya</button>
         </div>
      </section>

      <section class="p-5 lg:p-20">
         <p class="text-center text-2xl font-bold">Pertanyaan Yang Sering Ditanyakan</p>
         <p class="text-center text-xl text-slate-700">Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk kamu siap bekerja.</p>
         
         <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isCondition=!isCondition, isHiring=false, isStages=false, isProsesCov=false, isTrain=false" :class="{'bg-primary' : isCondition}">
            <div class="flex justify-between items-center">
               <p class="font-bold" :class="{'text-white' : isCondition}">Syarat untuk mengikuti program pelatihan Fazztrack apa saja kak?</p>
               <ArrowDownComponent class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isCondition}" />
            </div>
            <div v-if="isCondition" class="pt-5">
               <ul class="text-white">
                  <li>- Pria maupun wanita dengan usia 17 - 28 tahun,</li>
                  <li>- Tidak terikat kontrak dengan perusahan manapun,</li>
                  <li>- Tidak dalam masa kuliah ataupun sekolah (kecuali semester 8),</li>
                  <li>- Siap bekerja di perusahaan rekanan Fazztrack.</li>
               </ul>
            </div>
         </div>

         <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isStages=!isStages, isCondition=false, isHiring=false, isProsesCov=false, isTrain=false" :class="{'bg-primary' : isStages}">
            <div class="flex justify-between items-center">
               <p class="font-bold" :class="{'text-white' : isStages}">Bagaimana tahapan program pelatihan ini?</p>
               <ArrowDownComponent class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isStages}" />
            </div>
            <div v-if="isStages" class="pt-5">
               <ul class="text-white">
                  <li>Pendaftaran > Tes dan Interview secara online > Proses Pelatihan > Tes dan Interview kerja > Bekerja</li>
               </ul>
            </div>
         </div>

         <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isTrain=!isTrain, isCondition=false, isHiring=false, isStages=false, isProsesCov=false" :class="{'bg-primary' : isTrain}">
            <div class="flex justify-between items-center">
               <p class="font-bold" :class="{'text-white' : isTrain}">Sistem tesnya bagaimana kak?</p>
               <ArrowDownComponent class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isTrain}" />
            </div>
            <div v-if="isTrain" class="pt-5">
               <ul class="text-white">
                  <li>Nantinya akan dilaksanakan tes secara online di domisili masing-masing. Soal akan dikirim di grup discord jam 09.00 pada hari Senin, sesuai jadwal tes yang tertera di fazztrack.com/bootcamp</li>
               </ul>
            </div>
         </div>

         <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isHiring=!isHiring, isCondition=false, isStages=false, isProsesCov=false, isTrain=false" :class="{'bg-primary' : isHiring}">
            <div class="flex justify-between items-center">
               <p class="font-bold w-64" :class="{'text-white' : isHiring}">Bagaimana proses penyaluran kerja di Fazztrack?</p>
               <ArrowDownComponent class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isHiring}" />
            </div>
            <div v-if="isHiring" class="pt-5">
               <ul class="text-white">
                  <li>Pada pekan akhir pelatihan, kamu akan diberi tugas untuk membuat CV. Kemudian CV tersebut akan disalurkan oleh Fazztrack ke perusahaan rekanan kami. Jika CV kamu terpilih, kami akan menjadwalkan tes maupun interview dengan perusahaan tersebut. Jangan khawatir jika kamu belum terpanggil interview karena Fazztrack akan selalu membantu kamu untuk disalurkan kerja ke perusahaan yang lain.</li>
               </ul>
            </div>
         </div>

         <div class="border-2 p-5 rounded-md shadow-md mt-5 cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 z-10" v-on:click="isProsesCov=!isProsesCov, isCondition=false, isHiring=false, isStages=false, isTrain=false" :class="{'bg-primary' : isProsesCov}">
            <div class="flex justify-between items-center">
               <p class="font-bold" :class="{'text-white' : isProsesCov}">Bagaimana proses pelatihan saat pandemi COVID-19?</p>
               <ArrowDownComponent class="arrow-down transition-all duration-300" :class="{'-rotate-180 text-white' : isProsesCov}" />
            </div>
            <div v-if="isProsesCov" class="pt-5">
               <ul class="text-white">
                  <li>Pelatihan diadakan secara online saat pandemi COVID-19.</li>
               </ul>
            </div>
         </div>

         <div class="mt-20 flex justify-center">
            <button class="p-3 border-2 text-sm font-bold text-slate-700 hover:bg-slate-200 rounded-md">Lihat Selengkapnya</button>
         </div>
      </section>

      <section class="bg-[#fef3ec] p-5 lg:p-20">
         <p class="text-2xl text-center font-bold">Tunggu Apa Lagi? Gabung Bersama Kami!</p>
         <div class="flex justify-center mt-10">
            <button class="bg-secondary p-3 rounded-md text-white font-bold hover:bg-orange-500">Daftar Sekarang</button>
         </div>
      </section>
   </main>
</template>

<script>
   import cardSvg from '@/assets/json/dummy/cardSvg'
   import mitra from '@/assets/json/dummy/mitra'
   import alumni from '@/assets/json/dummy/alumni'
   import CardSelectBootcampComponent from '@/components/CardSelectBootcampComponent.vue'
   import CardSuperiorityComponent from '@/components/CardSuperiorityComponent.vue'
   import CardAlumniComponent from '@/components/CardAlumniComponent.vue'
   import CardStoryAlumniComponent from '@/components/CardStoryAlumniComponent.vue'
   import ArrowDownComponent from '@/components/ArrowDownComponent.vue'
   import { useRouter } from 'vue-router'
export default{
      data() {
         return {
            cardSvg,
            mitra,
            alumni,
            isCondition: false,
            isStages: false,
            isTrain:false,
            isHiring:false,
            isProsesCov:false
         };
      },
      setup() {
      const router = useRouter()

      const curicurumArr = [
         {
            title:"Fullstack Mobile",
            image:"fullstackMobile.png",
            desc: "Mempelajari bagaimana membangun aplikasi mobile dengan Javascript dari tahap perancangan selama 3 bulan pembelajaran secara online."
         }, {
            title:"Fullstack Website",
            image:"fullstackWebsite.png",
            desc:"Mempelajari bagaimana membangun aplikasi website dari tahap perancangan sampai testing selama 3 bulan pembelajaran secara online."
         }, {
            title:"Backend Javaspring",
            image:"backendJavaspring.png",
            desc:"Membangun aplikasi fullstack dengan React serta Spring Boot sebagai backend selama 3 bulan pembelajaran secara online."
         }, {
            title:"Backend Golang",
            image:"backendGolang.png",
            desc:"Membangun aplikasi fullstack dengan Javascript dan Golang serta otomasi sistem untuk membantu proses development lebih cepat."
         }
      ]

      const superiorityArr = [
         {
            title:"Dapat Kerja Lebih Cepat",
            image:"benefit.svg",
            desc:"Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan disalurkan kerja dengan dibekali pelatihan hard skill dan soft skill serta konsultasi karir untuk mendukung kesuksesan karir."
         }, {
            title:"Cicil Setelah Kerja",
            image:"benefit-2.svg",
            desc:"Fazztrack mempunyai program Income Share Agreement dimana lulusan tak perlu membayar sebelum diterima kerja dan lulusan akan mendapat gaji minimal sesuai standard yang sudah ditentukan."
         }, {
            title:"Ulang Kelas Gratis", 
            image:"benefit-3.svg",
            desc:"Fazztrack mengharuskan semua peserta dapat mencapai standard industri, sehingga Fazztrack akan selalu memfasilitasi setiap peserta untuk terus belajar sampai memenuhi standar industri dan siap kerja"
         }, {
            title:"Kurikulum Standard Industri",
            image:"benefit-4.svg",
            desc:"Kurikulum yang disusun sesuai dengan standar industri yang dapat dipelajari oleh peserta bootcamp dengan background apapun. Dibimbing langsung oleh mentor yang berpengalaman.."
         }, {
            title:"Supportive Trainer",
            image:"benefit-5.svg",
            desc:"Trainer Fazztrack selalu membantu selama proses belajar, termasuk 1 on 1 mentoring untuk memastikan peserta bootcamp mendapat pengalaman belajar terbaik selama Fazztrack."
         }
      ]

      const alumniStorysArr = [ 
         {
            title:"Lulusan Pesantren juga Bisa jadi DevOps Engineer",
            image:"afsana.png",
            desc:"Afsana lulusan pesantren dari Semarang bercita-cita sebagai Software Engineer sempat kesulitan membagi waktu antara mengaji, belajar akademik, dan belajar programming. Dengan kegigihanya Afsana mengikuti bootcamp Fazztrack sampai akhirnya dia menjadi Devops Engineer."
         }, {
            title:"Rela Drop Out Demi Mengejar Cita-Cita jadi Programmer",
            image:"shafa.png",
            desc:"Melihat adanya peluang lebih besar sebagai female Software Engineer, Shafa memilih dropout dan mengikuti pelatihan intensif dan mentoring di Fazztrack. Bekal ilmu yang didapat dari Fazztrack mengantarkannya menjadi Frontend Engineer."
         }, {
            title:"Kata Siapa Fresh Graduate Susah Dapat Kerja? Ini Buktinya",
            image:"tresna.png",
            desc:"Tresna, fresh graduate yang menemukan jalan ninjanya melalui Fazztrack. Disaat fresher graduate lainnya mengalami kesulitan dalam mencari pekerjaan, Tresna mengambil bootcamp Devops Engineer. Sekarang Tresna menjadi Devops Engineer di Gramedia."
         }
      ]

      const minicampHandler = () => {
         router.push({
            name:'minicamp'
         })
      }

         return {
         curicurumArr,
         superiorityArr,
         alumniStorysArr,
         minicampHandler
      };
   },
   components: { 
      CardSelectBootcampComponent,
      CardSuperiorityComponent,
      CardAlumniComponent,
      CardStoryAlumniComponent,
      ArrowDownComponent
   }
}
</script>