import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import "./App.css";

export default function Messanger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
}

const contacts = [
   { name: "Taylor" , email: "taylor@mail.com" },
];

