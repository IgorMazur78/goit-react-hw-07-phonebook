import axios from "axios";
import contactAction from "./contactAction";

axios.defaults.baseURL = "http://localhost:2000"

const addContacts = (name, number) => (dispatch) => {
  dispatch(contactAction.addContactRecuest());
  axios
    .post("/contacts", { name, number })
    .then((response) => {
      dispatch(contactAction.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactAction.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactAction.fetchContactRecuest());
  axios
    .post("/contacts")
    .then((response) => {
      console.log(response);
      dispatch(contactAction.fetchContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactAction.fetchContactError(error)));
};

const deleteContacts = (id) => (dispatch) => {
  dispatch(contactAction.deleteContactRecuest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactAction.deleteContactError(error)));
};

export default {
  addContacts,
  fetchContacts,
  deleteContacts,
};