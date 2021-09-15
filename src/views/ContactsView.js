import React from "react";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import LoaderSpinner from "../components/Loader";
import { getLoading } from "../redux/contacts/contacts-selectors";

export default function ContactsView() {
  const isLoading = useSelector(getLoading);
  return (
    <div className="contaiter">
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && <LoaderSpinner />}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </div>
  );
}
