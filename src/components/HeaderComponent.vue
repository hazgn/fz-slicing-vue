<template>
    <header class="sticky top-0 z-10 bg-white shadow-md p-[16px] lg:px-20 lg:pt-7 lg:pb-7">
        <div class="flex items-center justify-between">
            <RouterLink to="/" v-on:click="hamburgerToggler=false">
                <img :src="Image" alt="logo" class="cursor-pointer"/>
            </RouterLink>
            <div class="flex items-center absolute right-5">
                <button class="lg:hidden" :class="{'hamburger-active' : hamburgerToggler}" v-on:click="hamburgerToggler=!hamburgerToggler">
                    <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line transition duration-300 ease-in-out"></span>
                    <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                </button>

                <nav :class="{'nav-active' : hamburgerToggler}" class="fixed overflow-auto bottom-0  bg-white lg:bg-opacity-0 transition-all -right-full shadow-md top-12 duration-700 w-full lg:w-full lg:static lg:-mr-16 xl:mr-20 lg:shadow-none  lg:overflow-visible ">
                    <ul class="lg:flex ">
                            <li class="list-nav" v-on:click="isClass=!isClass, isAbout=false, isSupport=false">
                                <p>Kelas</p>
                                <ArrowDownComponent class="arrow-down transition duration-300" :class="{'-rotate-180 lg:-rotate-0' : isClass}"/>
                            </li>
                                <div :class="{'list-nav-sub' : isClass}" class="hidden">
                                    <ul class="p-5 text-slate-400 lg:border-r-[1px] lg:border-slate-300">
                                        <p>Bootcamp</p>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Fullstack Mobile</li>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Fullstack Website</li>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Backend Javaspring</li>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Backend Golang</li>
                                    </ul>
                                    <ul class="p-5 text-slate-400 lg:border-r-[1px] lg:border-slate-300">
                                        <p>MINI BOOTCAMP</p>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Digital Marketing</li>
                                        <li class="mt-5 text-slate-700 cursor-pointer">QA Automation Engineer</li>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Kelas Persiapan Bootcamp</li>
                                        <RouterLink to="/minicamp" v-on:click="isClass=false, isAbout=false, isSupport=false, hamburgerToggler=false"><li class="mt-5 text-slate-700 cursor-pointer">Lihat Semua</li></RouterLink>
                                    </ul>
                                    <ul class="p-5 text-slate-400">
                                        <p>Video Belajar</p>
                                        <RouterLink to="/modul-belajar" v-on:click="isClass=false, isAbout=false, isSupport=false, hamburgerToggler=false">
                                            <li class="mt-5 text-slate-700 cursor-pointer">Lihat Semua</li>
                                        </RouterLink>                                    </ul>
                                </div>
                            <li class="list-nav" v-on:click="isSupport=!isSupport, isClass=false, isAbout=false">
                                <p>Dukungan</p>
                                <ArrowDownComponent class="arrow-down transition duration-300" :class="{'-rotate-180 lg:-rotate-0' : isSupport}"/>
                            </li>
                            <div :class="{'list-nav-sub lg:ml-40' : isSupport}" class="hidden">
                                    <ul class="pl-5">
                                        <li class="mt-5 text-slate-700 cursor-pointer">Cicilan Setelah Kerja (ISA)</li>
                                        <li class="mt-5 text-slate-700 cursor-pointer">Career Ready</li>
                                        <li class="mt-5 pb-5 lg:pb-0 text-slate-700 cursor-pointer">FAQ</li>
                                    </ul>
                                </div>
                            <li class="list-nav" v-on:click="isAbout=!isAbout, isSupport=false, isClass=false">
                                <p>Tentang</p>
                                <ArrowDownComponent class="arrow-down transition duration-300" :class="{'-rotate-180 lg:-rotate-0' : isAbout}"/>
                            </li>
                            <div :class="{'list-nav-sub lg:ml-80' : isAbout}" class="hidden">
                                    <ul class="p-5 text-slate-400 lg:border-r-[1px] lg:border-slate-300">Alumni
                                        <li class="mt-5 text-slate-700 cursor-pointer">Cerita Alumni</li>
                                    </ul>
                                    <ul class="p-5 text-slate-400">Fazztrack
                                        <li class="mt-5 text-slate-700 cursor-pointer">Sekilas Fazztrack</li>
                                    </ul>
                                </div>
                            <li class="list-nav">
                                <p class="lg:w-32">Hire Our Graduates</p>
                            </li>
                        <li>
                            <div class="flex flex-col mt-5 items-center lg:flex-row lg:mt-1 lg:relative lg:right-12 xl:right-auto lg:top-1">
                                <button class="w-[80%] p-3 bg-white hover:bg-slate-100 lg:p-2 lg:pr-5 border-slate-400 border-[1px] rounded-lg lg:pl-5 lg:mr-5">Masuk</button>
                                <button class="w-[80%] mt-5 p-3 lg:mt-0 bg-[#2557a7] hover:bg-primary text-white lg:p-2 lg:pr-5 rounded-lg lg:pl-5">Daftar</button>
                            </div>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
        
    </header>
</template>

<script>
    import ArrowDownComponent from './ArrowDownComponent.vue'
    export default{
        name:'HeaderComponent',
        data(){
            return {
                Image: require('@/assets/svg/fazztrack-logo.svg'),
                hamburgerToggler: false,
                isClass:false,
                isSupport:false,
                isAbout:false
            }
        },
        components:{
            ArrowDownComponent
        }
    }
</script>