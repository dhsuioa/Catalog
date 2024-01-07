<template>
    <q-card class="my-card bg-accent q-pa-sm" bordered>
        <q-card-section horizontal>
            <q-img class=" q-ma-md col-5" :src="img" />
            <q-card-section class="row">
                <div>
                    <div class="text-h6"> {{ title }}</div>
                    <div class="text-subtitle2"> {{ price }} ₽</div>
                </div>
                <q-card-actions align="right">
                    <q-btn 
                        color="primary" 
                        class="btn" 
                        push 
                        label="buy"
                        @click="addToCart" />
                </q-card-actions>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>
  
<script setup lang="ts">

interface Props {
    title: string;
    price: number;
    img: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: 'Default title',
    price: 0,
    img: 'https://cdn.quasar.dev/img/parallax2.jpg'
})

const addToCart = () => {
    const cartItem = {
        title: props.title,
        price: props.price,
        img: props.img,
    };
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
};

</script>
  
<style scoped>
.my-card {
    width: 380px;
    height: 250px;
    /* min-width: 440px;
    min-height: 320px; */
}

.btn {
    border-radius: 10px;
    height: 40px;
    width: 130px;
}
</style>