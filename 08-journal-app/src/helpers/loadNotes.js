import { db } from '../firebase/firebase-config'

// uid del usuario para cargar las notas de esta persona
export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get()
  const notes = []
  // console.log(notesSnap)
  notesSnap.forEach((snapHijo) => {
    // console.log(snapHijo.data())
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    })
  })
  // console.log(notes)
  return notes
}
