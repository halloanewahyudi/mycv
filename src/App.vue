<script setup>
import Navbar from './components/Navbar.vue';
import Profile from './components/Profile.vue';
import Project from './components/Project.vue';
import Testimoni from './components/Testimoni.vue';
import Skill from './components/Skill.vue';
import Experience from "./components/Experience.vue";

import { onMounted, onUnmounted } from 'vue';

import Mail from "./components/icons/Mail.vue";
import Phone from "./components/icons/Phone.vue"; 
import Whatsapp from "./components/icons/Whatsapp.vue";
import Download from "./components/icons/Download.vue";
</script>

<template>
  <div class="max-w-screen-md mx-auto px-6 lg:px-20">
    <div class="px-4">
      <Profile id="profile" class="step mb-5" />
      <section class="step">
        <h4 id="project" class="text-xl font-semibold mb-5 text-primary">Projects</h4>
        <Project class="mb-10" />
      </section>
      <section class="step">
        <h4 id="testimoni" class="text-xl font-semibold mb-5 text-primary">Testimonal</h4>
        <Testimoni class="mb-10" />
      </section>
      <section class="step">
        <h4 id="skill" class="text-xl font-semibold mb-5 text-primary">Skill</h4>
        <Skill class="mb-10" />
      </section>
      <section class="step">
        <h4 id="experience" class="text-xl font-semibold mb-5 text-primary">Experience</h4>
        <Experience class="mb-10" />
      </section>
      <section class="py-2 border-t mb-10">
        <div class="flex flex-wrap justify-between items-center gap-2 text-sm">
          <div class="flex items-center gap-2">
            <span><Mail /></span>
            <a href="mailto:hallo.anewahyudi@gmail.com" class="text-gray-600 hover:text-gray-900 font-medium duration-300">hallo.anewahyudi@gmail.com</a>
        </div>
        <div class="flex items-center gap-2 ">
            <span><Whatsapp /></span>
            <a href="https://wa.me/628963612223" target="_blank"> <span>0896 3619 2223</span> </a>
        </div>
         <a href="/wahyudis-cv.pdf" target="_blank" class="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/80  flex items-center gap-3 font-medium duration-300">
         <Download /> Download CV
         </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.step {
  
}

.step.active {

}
</style>
