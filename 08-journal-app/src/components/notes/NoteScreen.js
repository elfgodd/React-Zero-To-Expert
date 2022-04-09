import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes)
  console.log(note)
  const [formValues, handleInputChange, reset] = useForm(note)
  const { body, title } = formValues

  const activeId = useRef(note.id)

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
  }, [note, reset])

  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className='notes__image'>
            <img
              src='https://scontent.fpac1-1.fna.fbcdn.net/v/t1.6435-9/53150292_2348974025146965_8538697225591586816_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=hSDGJzF3Fz8AX83qKwM&_nc_ht=scontent.fpac1-1.fna&oh=00_AT_WMxsbt23qJ5866jVjp8EJB-smw6DfVCKgJzGNaTLwFw&oe=62620A1C'
              alt='imagen'
            />
          </div>
        )}
      </div>
    </div>
  )
}
