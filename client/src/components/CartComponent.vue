<template>
    <q-card class="model" align="center">
      <q-card v-for="(item, index) in uniqueCartItems" align="left" :key="index" class="my-card bg-accent q-ma-md q-pa-sm">
        <q-card-section horizontal>
          <q-img class="q-ma-md col-5" :src="item.img" />
          <q-card-section class="row">
            <div>
              <div class="text-h6">{{ item.title }}</div>
              <div class="text-subtitle2">{{ item.price }} ₽</div>
            </div>
            <q-card-actions class="row">
                <div align="center">
                    <q-btn color="primary" flat class="btn" push icon="remove" @click="removeItem(item)" />
                    <div>{{ getItemQuantity(item.title) }}</div>
                    <q-btn color="primary" flat class="btn" push icon="add" @click="addItem(item)" />
                </div>
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card-section>
        <div class="text-h6">Total price: {{ price }} ₽
        </div>
      </q-card-section>
    </q-card>

  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  interface CartItem {
    title: string;
    price: number;
    img: string;
  }
  
  interface Props {
    cartItems: CartItem[];
    updateCart: () => void;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    cartItems: [],
    updateCart: () => {},
  });
  
  const cartItemsRef = ref(props.cartItems);
  
  const loadCartFromLocalStorage = () => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    cartFromLocalStorage.sort((a, b) => a.title.localeCompare(b.title));
    cartItemsRef.value = cartFromLocalStorage;
  };
  

  loadCartFromLocalStorage();
  
  const uniqueCartItems = computed(() => {
    const uniqueItems: CartItem[] = [];
    const addedTitles: Set<string> = new Set();
  
    for (const item of cartItemsRef.value) {
      if (!addedTitles.has(item.title)) {
        uniqueItems.push(item);
        addedTitles.add(item.title);
      }
    }
  
    return uniqueItems;
  });
  
  const getItemQuantity = (title: string) => {
    return cartItemsRef.value.filter(item => item.title === title).length;
  };
  
  const removeItem = (item: CartItem) => {
    const index = cartItemsRef.value.findIndex(cartItem => cartItem.title === item.title);
  
    if (index !== -1) {
      const updatedCart = [...cartItemsRef.value];
      updatedCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      loadCartFromLocalStorage();
      props.updateCart();
    }
  };
  
  const addItem = (item: CartItem) => {
    const updatedCart = [...cartItemsRef.value, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    loadCartFromLocalStorage();
    props.updateCart();
  };

  const price = computed(() => {
    return cartItemsRef.value.reduce((acc, item) => acc + item.price, 0);
  });
  </script>
  
  <style scoped>
  .model {
    width: 100%;
    height: 100%;
  }
  .my-card {
    width: 380px;
    height: 250px;
  }
  
  .btn {
    border-radius: 10px;
    height: 40px;
    width: 130px;
  }
  </style>
  