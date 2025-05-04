import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const getSavedContacts = () => {
  const saved = localStorage.getItem("contacts");
  return saved
    ? JSON.parse(saved)
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
};

const App = () => {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    const newContact = { id: nanoid(), ...contact };
    setContacts((prev) => [...prev, newContact]);
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
