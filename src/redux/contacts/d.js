// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// } from "./contacts-actions";
// import * as contactsApi from "../../services/contacts-api";

// const BASE_URL = "http://localhost:4040";

// axios.defaults.baseURL = BASE_URL;

// const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get("/contacts")
//     .then(({ data }) => {
//       dispatch(fetchContactsSuccess(data));
//     })
//     .catch((error) => dispatch(fetchContactsError(error)));
// };

// const addContact =
//   ({ name, number }) =>
//   (dispatch) => {
//     const contact = { name, number };

//     dispatch(addContactRequest());
//     axios
//       .post("/contacts", contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch((error) => dispatch(addContactError(error)));
//   };

// const removeContact = (contactId) => (dispatch) => {
//   dispatch(removeContactRequest());
//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(removeContactSuccess(contactId)))
//     .catch((error) => dispatch(removeContactError(error)));
// };

// eslint-disable-next-line import/no-anonymous-default-export
// export default { fetchContacts, addContact, removeContact };

//-----------------------------------------------

// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// } from "./contacts-actions";
// import * as contactsApi from "../../services/contacts-api";

// const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());

//   try {
//     const {data} = await contactsApi.fetchAllContacts();

//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

// const addContact =
//   ({ name, number }) =>
//   async (dispatch) => {
//     dispatch(addContactRequest());

//     try {
//       const { data } = await contactsApi.addNewContact({ name, number });
//       console.log(data);

//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error));
//     }
//   };

// const removeContact = (contactId) => async (dispatch) => {
//   dispatch(removeContactRequest());

//   try {
//     await contactsApi.removeContactById(contactId);
//     dispatch(removeContactSuccess(contactId));
//   } catch (error) {
//     dispatch(removeContactError(error));
//   }
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { fetchContacts, addContact, removeContact };
