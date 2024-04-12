import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import { nanoid } from 'nanoid'
import validationSchema from '../../tools/validationSchema'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'
import css from './ContactForm.module.css'

export default function ContactForm() {
  const uniqueId = useId()
  const dispatch = useDispatch()

  function handleAddContact(values, actions) {
    dispatch(addContact({ ...values, id: nanoid() }))
    actions.resetForm()
  }
  return (
    <Formik
      initialValues={{
        id: '',
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleAddContact}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={uniqueId}>
            Name
          </label>
          <Field
            className={css.input}
            name="name"
            id={uniqueId}
          ></Field>
          <ErrorMessage
            name="name"
            component="span"
            className={css.error}
          />
        </div>
        <div>
          <label className={css.label} htmlFor={uniqueId}>
            Number
          </label>
          <Field
            className={css.input}
            name="number"
            id={uniqueId}
          ></Field>
          <ErrorMessage
            name="number"
            component="span"
            className={css.error}
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  )
}
