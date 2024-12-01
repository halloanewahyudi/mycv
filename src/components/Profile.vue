<script setup>
import Mail from "./icons/Mail.vue";
import Phone from "./icons/Phone.vue"; 
</script>
<template>
    <div class="flex flex-col gap-5">
        <div class="flex items-center gap-5">
            <div class="w-20 h-20 rounded-r-full overflow-hidden">
                <img src="../assets/ane.png" alt="" class="object-contain">
            </div>
            <div class="">
                <h4 class="font-medium text-xl">Wahyudi</h4>
                <p> Web designer/developer</p>
            </div>
        </div>
        <p>
            Saya adalah seorang web designer/developer yang memiliki pengalaman lebih dari 9 tahun dalam membuat website dan aplikasi web. Saya memiliki kemampuan untuk mengembangkan desain yang menarik dan memenuhi kebutuhan klien.
        </p>
        <p>
            Saya pernah bekerja di beberapa perusahaan IT yang berfokus pada pembuatan website dan aplikasi web. Saya memiliki kemampuan untuk mengembangkan desain yang menarik dan memenuhi kebutuhan klien.
        </p>
        <div>
            <div class="flex items-center gap-2">
            <span><Mail /></span>
            <a href="mailto:hallo.anewahyudi@gmail.com" class="text-gray-600 hover:text-gray-900 font-medium duration-300">hallo.anewahyudi@gmail.com</a>
        </div>
        <div class="flex items-center gap-2">
            <span><Phone /></span>
           <span>0896 3619 2223</span>
        </div>
        </div>

    </div>
</template>