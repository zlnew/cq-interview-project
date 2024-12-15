<script setup lang="ts">
definePageMeta({
  name: 'not-vip'
})

useServerSeoMeta({
  title: 'Not VIP'
})
</script>

<template>
  <div class="text-center font-bold text-red-500">
    <div class="text-4xl">⛔</div>
    <div class="text-4xl">FORBIDDEN YOU ARE NOT A VIP!</div>
    <div class="text-2xl">ONLY USERS WITH ID NUMBER 5 AND ABOVE CAN ENTER!</div>
  </div>
</template>
