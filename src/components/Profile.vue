<script setup>
import ListItem from "./element/ListItem.vue";
import Mail from "./icons/Mail.vue";
import Phone from "./icons/Phone.vue";

</script>
<template>
    <div class="flex flex-col gap-5">
        <div class="flex flex-wrap items-center gap-5">
            <img src="/ane.png" alt="" class="object-contain">
            <div class="">
                <h4 class="font-medium text-xl">Wahyudi</h4>
                <p class="text-sm"> Web designer/developer</p>
                <div class="mt-5">
                    <div class="flex items-center gap-2">
                        <span>
                            <Mail />
                        </span>
                        <a href="mailto:hallo.anewahyudi@gmail.com"
                            class="text-gray-600 hover:text-gray-900 font-medium duration-300">hallo.anewahyudi@gmail.com</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <span>
                            <Phone />
                        </span>
                        <span>0896 3619 2223</span>
                    </div>
                </div>
            </div>
        </div>
        <p>
            Saya memiliki latar belakang yang beragam, dimulai dari pengalaman bekerja di divisi kontraktor, di mana
            saya bertanggung jawab memastikan kebutuhan operasional proyek, mulai dari pengadaan material hingga
            mendukung kebutuhan tim di lapangan. Selama bekerja di lingkungan ini, saya mulai tertarik untuk mempelajari
            desain arsitektur dan perencanaan, yang memberi saya kesempatan untuk mengeksplorasi sisi kreatif dari
            pekerjaan saya.
        </p>
        <p>
            Seiring waktu, saya menemukan minat yang mendalam di bidang web design dan development. Dengan semangat
            belajar dan eksplorasi, saya mengembangkan keterampilan dalam menciptakan website yang fungsional dan
            estetis, mulai dari desain UI/UX hingga pengembangan berbasis WordPress dan solusi digital lainnya.
        </p>
        <p>
            Saat ini, saya berkomitmen untuk membantu klien menciptakan produk digital yang kreatif, efektif, dan sesuai
            dengan kebutuhan mereka. Dengan kombinasi pengalaman saya yang beragam dan kecintaan pada teknologi, saya
            percaya dapat memberikan solusi terbaik dalam setiap proyek yang saya kerjakan.
        </p>
    </div>
</template>