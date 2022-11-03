<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="display name" v-model="displayName">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">

        <div class="error">
        {{ error }}
        </div>
        <button>Sign Up</button>
        </form>

</template>

<script>
import { async } from '@firebase/util';
import { ref } from 'vue'
import useSignup from '../composables/useSignup';

export default {
setup(props, context) {
    const { error, signup } = useSignup
    //ref
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
        await signup(email.value, password.value, displayName.value, error)
        if (!error.value) {
                context.emit('signup')
              }
    }
}
}


</script>