<template>
    <main>
        <section class="fixed bg-white w-full p-5 lg:p-10 lg:pl-20 z-10 ">
            <p class="text-2xl font-bold">Jelajahi modulnya dan ubah masa depanmu</p>
            <div>
                <input type="text" class="border-2 w-full p-3 rounded-md mt-3" placeholder="Mau belajar apa hari ini? Cari topik atau materimu disini..">
               <div class="relative left-[90%] md:left-[95%] bottom-9">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
               </div>
            </div>
        </section>

        <section class="pt-48 p-5 lg:p-20 lg:pt-60 bg-slate-200 -z-10 md:flex flex-wrap justify-between">
           <div v-for="(data, idx) in moduleLearning" :key="idx" class="grow">
            <CardModuleLearningComponent  :image="data.image" :title="data.title" :desc="data.desc" :level="data.level" :star="data.star" :price="data.price" />
           </div>
        
        </section>
   </main>
</template>

<script>
    import CardModuleLearningComponent from '@/components/CardModuleLearningComponent.vue'
    import moduleLearning from '@/assets/json/dummy/moduleLearning'

    export default {
        data(){
            return {
                moduleLearning
            }
        },
        components:{
            CardModuleLearningComponent
        }
    }
</script>