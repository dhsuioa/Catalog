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
      title: 'Пальто Zarina',
      price: 1577,
      img: 'https://ir.ozone.ru/s3/multimedia-u/wc500/6819683574.jpg'
    },
    {
      title: 'Куртка Befree',
      price: 2169,
      img: 'https://ir.ozone.ru/s3/multimedia-9/wc500/6728178933.jpg'
    },
    {
      title: 'Домашний комплект Zara',
      price: 2344,
      img: 'https://ir.ozone.ru/s3/multimedia-j/wc500/6699948463.jpg'
    },
    {
      title: 'Жакет oodji',
      price: 1259,
      img: 'https://ir.ozone.ru/s3/multimedia-3/wc500/6368637951.jpg'
    },
    {
      title: 'Кардиган Gloria Jeans',
      price: 810,
      img: 'https://ir.ozone.ru/s3/multimedia-9/wc500/6696316089.jpg'
    },
    {
      title: 'Брюки VICTORIA VICCI',
      price: 10844,
      img: 'https://ir.ozone.ru/s3/multimedia-u/wc500/6834747162.jpg'
    },
  
  ])
  </script>
  