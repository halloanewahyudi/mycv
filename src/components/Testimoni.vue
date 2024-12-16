<script setup>
import testi from "@/assets/testimonial.json";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { onMounted, ref } from "vue";
const load = ref(true)

onMounted(async () => {
    if (testi.length > 0) {
        load.value = false
    }
    
})
</script>
    <template>
        <div v-if="load">
            <p>Loading...</p>
        </div>
        <div v-else >
            <Splide :options="{ 
    type: 'loop',
    perPage: 2,
    rewind: true,
    autoplay: true,
    interval: 3000,
    speed: 1000,
    arrows: false,
    pagination: false,
    breakpoints: {
        640: {
            perPage: 1
        }
    }
     }" aria-label="My Favorite Images" class="border-y ">
    <SplideSlide v-for="(item, index) in testi" :key="index" class="md:w-1/2  p-5 flex flex-col justify-start ">
        <p class="itelic text-neutral-700">{{ item.testimoni }}</p>
      <p class="font-semibold text-sm mt-3">{{ item.name }}</p>
    </SplideSlide>
  </Splide>
        </div>

</template>
