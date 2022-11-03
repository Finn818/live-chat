import { ref } from 'vue'
import { projectAuth } from '/src/firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_user => {
    console.log('User state changed... user is:', _user)
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser