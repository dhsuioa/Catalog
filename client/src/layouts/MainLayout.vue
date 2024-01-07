<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-dark text-white">
      <q-toolbar class="column">
        <div class="q-pa-md q-gutter-md">
          <q-btn v-for="btn in buttons"
          outline
          :label="btn.label"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const buttons = ref ([
  {
    label: 'Mens',
  },
  {
    label: 'New',
  },
  {
    label: 'Womens',
  },
])
</script>
