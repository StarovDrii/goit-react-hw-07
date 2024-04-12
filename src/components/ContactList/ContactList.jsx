import { useSelector } from 'react-redux'
import { selectNameFilter } from '../../redux/filtersSlice'
import { selectItems } from '../../redux/contactsSlice'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useMemo } from 'react'

export default function ContactList() {
  const contacts = useSelector(selectItems)
  const filter = useSelector(selectNameFilter)

  function filterContacts(contacts, filter) {
    if (!filter) return contacts
    return contacts.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase().trim()),
    )
  }

  const filteredContacts = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter],
  )

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  )
}
