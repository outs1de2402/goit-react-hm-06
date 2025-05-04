const Contact = ({ contact, onDelete }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
