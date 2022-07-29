export const addNewContact = (params) => {
  return {
    type: process.env.REACT_APP_ADD_NEW_CONTACT,
    payload: { params: params },
  };
};

export const editContact = (key, params) => {
  return {
    type: process.env.REACT_APP_EDIT_CONTACT,
    payload: { key: key, params: params },
  };
};
