import { ref } from 'vue'
import { projectFirestore } from '/src/firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
    
    collectionRef.onSnapshot((snap) => {
        console.log(snapshot)
        let results = []
            snap.docs.forEach(doc => {
                doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
            })
            documents.value = results
            error.value = null
    }, (err) => {
        console.log(err.message)
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        //unsub from prev collection when is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection