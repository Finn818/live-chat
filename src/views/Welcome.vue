<template>
<div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm @login="" />
        <p>No account yet? <span @click="showLogin = false">Sign Up</span> instead </p>
    </div>

    <div v-else>
        <h2>Sign Up</h2>
        <SignupForm @signup="" />
        <p>Already have an account! <span @click="showLogin = true">Login</span> instead </p>
    </div>  
</div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router';

export default {
components: { SignupForm, LoginForm },

Setup() {
    const showLogin = ref(false)
    const router = useRoute

    const enterChat = () => {
       router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
}
}

</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px 0;
}
.welcome label {
    display: block;
    margin: 20px 0;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>