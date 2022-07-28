export const addNewContact = (params) => {
  return {
    type: process.env.REACT_APP_ADD_NEW_CONTACT,
    payload: { params: params },
  };
};

export const editContact = (id, params) => {
  return {
    type: process.env.REACT_APP_EDIT_CONTACT,
    payload: { id: id, params: params },
  };
};
