<template>
  <q-page class="row justify-center">
    <div class="row items-center" align="center">
      <div v-for="card in cards"  class="col-4" >
        <card-component
        align="left"
          :title="card.title"
          :price="card.price"
          :img="card.img"
        ></card-component>
      </div>
    </div>
  </q-page>
</template> 

<script setup lang="ts">
import { ref } from 'vue';
import CardComponent from 'components/CardComponent.vue';

const cards = ref([
  {
    title: 'Ботинки MAGMA',
    price: 2581,
    img: 'https://ir.ozone.ru/s3/multimedia-3/wc350/6870111735.jpg'
  },
  {
    title: 'Комбинезон Termit',
    price: 7667,
    img: 'https://ir.ozone.ru/s3/multimedia-s/wc350/6805338220.jpg'
  },
  {
    title: 'Брюки Nike',
    price: 5776,
    img: 'https://ir.ozone.ru/s3/multimedia-w/wc350/6654548648.jpg'
  },
  {
    title: 'Сапоги Xcomfy',
    price: 2006,
    img: 'https://ir.ozone.ru/s3/multimedia-4/wc350/6832130224.jpg'
  },
  {
    title: 'Шарф Disha',
    price: 873,
    img: 'https://ir.ozone.ru/s3/multimedia-7/wc350/6863685235.jpg'
  },
  {
    title: 'Шапка Limastar',
    price: 1823,
    img: 'https://ir.ozone.ru/s3/multimedia-b/wc350/6797641511.jpg'
  },

])
</script>
