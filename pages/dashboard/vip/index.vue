<script setup lang="ts">
definePageMeta({
  name: 'vip',
  middleware: ['vip']
})

useServerSeoMeta({
  title: 'VIP'
})
</script>

<template>
  <div class="text-center font-bold text-red-500">
    <div class="text-4xl">👑</div>
    <div class="text-4xl">Welcome Back VIP</div>
  </div>
</template>
