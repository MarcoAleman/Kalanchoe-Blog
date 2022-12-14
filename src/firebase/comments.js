import { app } from './index';
import { getFirestore, collection, query, where, getDocs, addDoc, doc, onSnapshot } from 'firebase/firestore'
import { comments } from '../stores/PostStore'
import { async } from '@firebase/util';

const db = getFirestore(app)
const commentRef = collection(db, 'comments');
/* const q = query(collection(db, 'usuarios'))

const traerUsuarios = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    })
} */

const addComment = (comment) => {
    addDoc(commentRef, comment);
}

const getComments = () => {
    onSnapshot(commentRef, (snapshot) => {
        comments.value = []
        snapshot.forEach(commentData => {
            let newComment = {
                id: commentData.id,
                postId: commentData.data().postId,
                date: commentData.data().date,
                name: commentData.data().name,
                email: commentData.data().email,
                text: commentData.data().text,
                photo: commentData.data().photo,
            }
            comments.value.push(newComment)
        })
        comments.value.sort((a,b) => a.date - b.date)
    })
}
export { addComment, getComments }