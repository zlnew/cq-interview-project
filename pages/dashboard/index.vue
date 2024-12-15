<script setup lang="ts">
import useAuthStore from '~/stores/auth'

definePageMeta({
  name: 'dashboard'
})

useServerSeoMeta({
  title: 'Dashboard'
})

const authStore = useAuthStore()
const { userId, user } = storeToRefs(authStore)

onMounted(() => {
  getUser()
})

const getUser = async () => {
  user.value = await $fetch(`/api/auth/${userId.value}`)
}
</script>

<template>
  <div
    v-if="user"
    class="rounded bg-white p-2"
  >
    <table>
      <tbody>
        <tr>
          <td class="w-1/5">ID</td>
          <td>{{ user.id }}</td>
        </tr>
        <tr>
          <td class="w-1/5">Name</td>
          <td>{{ user.name }}</td>
        </tr>
        <tr>
          <td class="w-1/5">Username</td>
          <td>{{ user.username }}</td>
        </tr>
        <tr>
          <td class="w-1/5">Email</td>
          <td>{{ user.email }}</td>
        </tr>

        <tr>
          <td
            colspan="4"
            class="bg-slate-200"
          >
            Address
          </td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">Street</td>
          <td>{{ user.address.street }}</td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">Suite</td>
          <td>{{ user.address.suite }}</td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">City</td>
          <td>{{ user.address.city }}</td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">Zipcode</td>
          <td>{{ user.address.zipcode }}</td>
        </tr>

        <tr>
          <td />
          <td
            colspan="3"
            class="bg-slate-200"
          >
            Geo
          </td>
        </tr>
        <tr>
          <td />
          <td />
          <td class="w-1/5">lat</td>
          <td>{{ user.address.geo.lat }}</td>
        </tr>
        <tr>
          <td />
          <td />
          <td class="w-1/5">lng</td>
          <td>{{ user.address.geo.lng }}</td>
        </tr>

        <tr>
          <td class="w-1/5">Phone</td>
          <td>{{ user.phone }}</td>
        </tr>
        <tr>
          <td class="w-1/5">Website</td>
          <td>{{ user.website }}</td>
        </tr>

        <tr>
          <td
            colspan="4"
            class="bg-slate-200"
          >
            Company
          </td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">Name</td>
          <td>{{ user.company.name }}</td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">CatchPhrase</td>
          <td>{{ user.company.catchPhrase }}</td>
        </tr>
        <tr>
          <td />
          <td class="w-1/5">Bs</td>
          <td>{{ user.company.bs }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
