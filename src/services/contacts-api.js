import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";

axios.defaults.baseURL = BASE_URL;

export async function fetchAllContacts() {
  return await axios.get("/contacts");
}

export async function addNewContact(contact) {
  return await axios.post("/contacts", contact);
}

export async function removeContactById(contactId) {
  return await axios.delete(`/contacts/${contactId}`);
}
