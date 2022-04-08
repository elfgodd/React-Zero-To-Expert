import { db } from '../firebase/firebase-config'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // const state = getState()
    // console.log(state)

    const uid = getState().auth.uid
    console.log(uid)

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
    console.log(doc)
    // const note = {
    //   title: '',
    //   content: '',
    //   createdAt: new Date(),
    //   ownerId: uid,
    //   noteId: notes.length + 1,
    // }

    // dispatch({ type: 'notes/NEW_NOTE', payload: note })
  }
}
