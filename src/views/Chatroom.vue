<template>
    <div class="container">
        <navbar />
        <ChatWindow />
        <NewChatForm />

    </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
import navbar from '../components/navbar.vue'
import getUser from '../composables/getUser'
import watch from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { navbar, NewChatForm, ChatWindow },
    setup() {
        const { user } = getUser
        const router = useRouter

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })
    }
}

</script>

<style>

</style>