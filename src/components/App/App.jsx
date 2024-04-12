import ContactList from '../ContactList/ContactList'
import SearchBar from '../SearchBox/SearchBox'
import ContactForm from '../ContactForm/ContactForm'
import './App.css'

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  )
}
