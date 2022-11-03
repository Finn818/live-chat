import { ref } from 'vue'
import { projectAuth } from '/src/firebase/config'

const error = ref('')

const logout = async () => {
    error.value = null
    try  {
    await projectAuth.signOut()
    } catch(err) {
        console.log(err.message)
        error.value = err.message

    }

}

const useLogout = () => {
    return { logout, error }
}

export default useLogout