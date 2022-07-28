import axios from "axios";
import {
  addContact,
  addFavorite,
  fetchPeople,
  removeContact,
  removeFavorite,
} from "./actions";
import { addCompany, fetchCompanies } from "./companyAction";
import { addNewContact } from "./contactAction";

export const getPeople = (dispatch) => {
  return axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/people.json")
    .then((response) => {
      let people = [];
      Object.entries(response.data).forEach(([index, value]) => {
        people.push({ ...value, key: index });
      });
      dispatch(fetchPeople(people));
    });
};

export const saveContact = (key, dispatch) => {
  let updateData = { isContact: true };
  axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(addContact(key));
    });
};

export const deleteContact = (key, dispatch) => {
  let updateData = { isContact: false, isFavourite: false };
  axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(removeContact(key));
    });
};

export const saveFavourite = (key, dispatch) => {
  let updateData = { isFavourite: true };
  axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(addFavorite(key));
    });
};

export const deleteFavourite = (key, dispatch) => {
  let updateData = { isFavourite: false };
  axios
    .patch(
      process.env.REACT_APP_FIREBASE_URL + "/people/" + key + ".json",
      updateData
    )
    .then(() => {
      dispatch(removeFavorite(key));
    });
};

export const getCompanies = (dispatch) => {
  return axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      let companies = [];
      Object.entries(response.data).forEach(([index, value]) => {
        companies.push({ ...value, key: index });
      });
      dispatch(fetchCompanies(companies));
    });
};

export const addNewCompany = (company, dispatch) => {
  return axios
    .post(process.env.REACT_APP_FIREBASE_URL + "/companies.json", company)
    .then(() => {
      dispatch(addCompany(company));
    });
};

export const editCompany = (dispatch) => {
  return axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      dispatch(fetchCompanies(response.data));
    });
};

export const deleteCompany = (dispatch) => {
  return axios
    .get(process.env.REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      dispatch(fetchCompanies(response.data));
    });
};

export const saveNewContact = (formData, dispatch) => {
  axios
    .post(process.env.REACT_APP_FIREBASE_URL + "/people.json", formData)
    .then((response) => {
      formData["key"] = response.data["name"];
      dispatch(addNewContact(formData));
    });
};
