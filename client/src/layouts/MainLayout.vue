<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-secondary">
      <q-toolbar align="right">
        <div class="q-pa-md q-gutter-md col-7">
          <q-btn
            v-for="btn in buttons"
            :key="btn.label"
            :to="btn.src"
            :label="btn.label"
            color="primary"
            :outline="isActive(btn.src).value"
            class="btn"
          />
        </div>
        <div class="col-5">
          <q-btn
            icon="local_grocery_store"
            color="primary"
            @click="openCartDialog"
            flat
          >
          </q-btn>
        </div>
      </q-toolbar>
      <q-dialog v-model="isOpen">
        <cart-component :cartItems="cartItems" :updateCart="updateCart" />
      </q-dialog>
    </q-header>

    <q-page-container>
      <router-view />
      {{ cartItems }}
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import CartComponent from '../components/CartComponent.vue';

const isOpen = ref(false);

const buttons = ref([
  {
    label: 'Mens',
    src: '/Mens'
  },
  {
    label: 'New',
    src: '/'
  },
  {
    label: 'Womens',
    src: '/Womens'
  },
]);

const route = useRoute();
const isActive = (path: string) => computed(() => route.path === path);

const cartItems = ref(JSON.parse(localStorage.getItem('cart') || '[]'));

const updateCart = () => {
  cartItems.value = JSON.parse(localStorage.getItem('cart') || '[]');
};

const openCartDialog = () => {
  isOpen.value = true;
  updateCart();
};
</script>

<style scoped>
.btn {
  border-radius: 10px;
  height: 40px;
  width: 130px;
}
</style>
