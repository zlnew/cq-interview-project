<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'text' | 'number'
    placeholder?: string
    disabled?: boolean
    required?: boolean
    autocomplete?: string
    error?: string | null
  }>(),
  {
    type: 'text',
    placeholder: undefined,
    autocomplete: 'off',
    error: null
  }
)

const id = useId()
const model = defineModel<string | number>()
</script>

<template>
  <label
    :for="id"
    class="space-y-2"
  >
    <div class="font-bold"><slot name="label" /></div>
    <input
      :id="id"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      class="w-full rounded"
    />
    <div
      v-if="error"
      class="text-red-500"
    >
      {{ error }}
    </div>
  </label>
</template>
