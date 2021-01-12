import axios from "axios";
import contactAction from "./contactAction";

axios.defaults.baseURL = "https://my-json-server.typicode.com/IgorMazur78/goit-react-hw-07-phonebook/";
axios.defaults.headers = {"Access-Control-Allow-Origin": "*"};
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
    .get("/contacts")
    .then((response) => {
      console.log(response.data);
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContacts,
  fetchContacts,
  deleteContacts,
};
