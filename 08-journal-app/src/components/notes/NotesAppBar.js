import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {
  const dispatch = useDispatch()
  const { active } = useSelector((state) => state.notes)
  console.log(active)

  const handleSave = () => {
    console.log('save')
    dispatch(startSaveNote(active))
  }
  return (
    <div className='notes__appbar'>
      <span>28 de agotso de 2020</span>
      <div>
        <button className='btn'>Picture</button>
        <button className='btn' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
