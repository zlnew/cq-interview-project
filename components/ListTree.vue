<script setup lang="ts">
defineProps<{
  data: object
  child?: boolean
}>()
</script>

<template>
  <ul class="group divide-y">
    <li
      v-for="(value, key) in data"
      :key="key"
      class="grid grid-cols-5 gap-2 divide-x"
      :class="child ? 'ml-4' : 'ml-0'"
    >
      <template v-if="typeof value !== 'object'">
        <div class="font-bold capitalize">{{ key }}</div>
        <div class="col-span-4">{{ value }}</div>
      </template>

      <template v-else-if="value !== null">
        <ul class="col-span-5 divide-y">
          <div class="bg-slate-200 px-2 font-bold capitalize">{{ key }}</div>
          <ListTree
            :data="value"
            child
          />
        </ul>
      </template>
    </li>
  </ul>
</template>
