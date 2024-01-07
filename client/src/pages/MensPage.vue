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
      title: 'Пальто пуховое',
      price: 9615,
      img: 'https://ir.ozone.ru/s3/multimedia-0/wc500/6819491160.jpg'
    },
    {
      title: 'Пальто Nikolom',
      price: 6304,
      img: 'https://ir.ozone.ru/s3/multimedia-1/wc500/6787151317.jpg'
    },
    {
      title: 'Толстовка добрыня',
      price: 832,
      img: 'https://ir.ozone.ru/s3/multimedia-h/wc500/6466038197.jpg'
    },
    {
      title: 'Куртка KYRTKMEN',
      price: 12860,
      img: 'https://ir.ozone.ru/s3/multimedia-a/wc500/6868795186.jpg'
    },
    {
      title: 'Поло',
      price: 570,
      img: 'https://ir.ozone.ru/s3/multimedia-y/wc500/6613832698.jpg'
    },
    {
      title: 'Комбинезон SNOW HEADQUARTER',
      price: 10844,
      img: 'https://ir.ozone.ru/s3/multimedia-m/wc500/6425369398.jpg'
    },
  
  ])
  </script>
  