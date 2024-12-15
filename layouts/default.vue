<script setup lang="ts">
import useAuthStore from '~/stores/auth'

const authStore = useAuthStore()

const logout = () => {
  authStore.userId = ''
  authStore.user = undefined
  navigateTo({ name: 'login' })
}
</script>

<template>
  <div>
    <nav class="fixed top-0 w-full bg-blue-500 text-white">
      <div class="container mx-auto flex h-16 items-center justify-between">
        <NuxtLink
          :to="{ name: 'dashboard' }"
          class="font-bold"
        >
          FrontEnd Test
        </NuxtLink>

        <ul class="flex items-center justify-end gap-4">
          <li>
            <NuxtLink :to="{ name: 'vip' }">Open VIP</NuxtLink>
          </li>
          <li>
            <button
              type="button"
              @click="logout"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <main class="flex h-dvh items-center justify-center">
      <slot />
    </main>
  </div>
</template>
