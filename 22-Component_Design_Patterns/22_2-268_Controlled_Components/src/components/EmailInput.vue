<template>
    <input type="email" class="form-control" placeholder="E-mail" :value="email" @input="update($event)" :class="{
        'is-valid': validateEmail(email),
        'is-invalid': !validateEmail(email),
    }" />
</template>

<script>
import validateEmail from '../validate-email.js'

export default {
    name: 'EmailInput',
    props: ['email'],
    methods: {
        update($event) {
            this.$emit('update:modelValue', $event.target.value)
        },
        validateEmail
    }
}
</script>
