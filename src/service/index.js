import axios from "axios";
import { addContact, addFavorite, fetchPeople, removeContact, removeFavorite } from "./actions";

export const getPeople = (dispatch) => {
    return axios.get(process.env.REACT_APP_FIREBASE_URL + '/people.json')
          .then((response) => {
            dispatch(fetchPeople(response.data))
          });
}

export const saveContact = (id, dispatch) => {
    let updateData = {isContact: true};
    axios.patch(process.env.REACT_APP_FIREBASE_URL + "/people/" + id + ".json", updateData).then(() => {
        dispatch(addContact(id))
    });
}

export const deleteContact = (id, dispatch) => {
    let updateData = {isContact: false, isFavourite: false};
    axios.patch(process.env.REACT_APP_FIREBASE_URL + "/people/" + id + ".json", updateData).then(() => {
        dispatch(removeContact(id))
    });
}

export const saveFavourite = (id, dispatch) => {
    let updateData = {isFavourite: true};
    axios.patch(process.env.REACT_APP_FIREBASE_URL + "/people/" + id + ".json", updateData).then(() => {
        dispatch(addFavorite(id))
    });
}

export const deleteFavourite = (id, dispatch) => {
    let updateData = {isFavourite: false};
    axios.patch(process.env.REACT_APP_FIREBASE_URL + "/people/" + id + ".json", updateData).then(() => {
        dispatch(removeFavorite(id))
    });
}