const useInputValidator = (input: Ref<number | string | undefined>) => {
  const error = ref<string | null>(null)

  const validate = () => {
    if (!input.value) {
      error.value = 'Value is required'
      return
    }

    const validNumber = /^\d+$/.test(input.value.toString())
    const validString = /^[a-zA-Z]+$/.test(input.value.toString())

    if (typeof input.value === 'number' && !validNumber) {
      error.value = 'Only numbers are allowed. Please remove any letters or special characters.'
      return
    }

    if (typeof input.value === 'string' && !validString) {
      error.value = 'Only letters are allowed. Please remove any numbers or special characters.'
      return
    }

    error.value = null
  }

  watch(input, validate)

  return {
    error,
    validate
  }
}

export default useInputValidator
