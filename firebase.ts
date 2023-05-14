import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDAkwxkmGwSy_pLXArDmzsqVpGDVXUSzKE',
  authDomain: 'recipe-d5163.firebaseapp.com',
  projectId: 'recipe-d5163',
  storageBucket: 'recipe-d5163.appspot.com',
  messagingSenderId: '934951655675',
  appId: '1:934951655675:web:1a00a73c37b3208597b85e',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
