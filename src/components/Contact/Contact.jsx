import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import css from './Contact.module.css'
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch()

  return (
    <>
      <h2 className={css.name}>{name}</h2>
      <p className={css.number}>{number}</p>
      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  )
}
