export const fetchPeople = (people) => {
  people.map((person, index) => {
    person["index"] = index;
    return person;
  });
  return {
    type: process.env.REACT_APP_GET_PEOPLE,
    payload: people,
  };
};

export const filterPeople = (param) => {
  return {
    type: process.env.REACT_APP_FILTER_PEOPLE,
    payload: { param: param },
  };
};

export const addContact = (key) => {
  return {
    type: process.env.REACT_APP_ADD_CONTACT,
    payload: { key: key },
  };
};

export const removeContact = (key) => {
  return {
    type: process.env.REACT_APP_REMOVE_CONTACT,
    payload: { key: key },
  };
};

export const addFavorite = (key) => {
  return {
    type: process.env.REACT_APP_ADD_FAVOURITE,
    payload: { key: key },
  };
};

export const removeFavorite = (key) => {
  return {
    type: process.env.REACT_APP_REMOVE_FAVOURITE,
    payload: { key: key },
  };
};

export const filterLocation = (location) => {
  return {
    type: process.env.REACT_APP_GET_LOCATION,
    payload: { location: location },
  };
};

export const viewDisplay = (isListView) => {
  return {
    type: process.env.REACT_APP_VIEW_DISPLAY,
    payload: { isListView: isListView },
  };
};
