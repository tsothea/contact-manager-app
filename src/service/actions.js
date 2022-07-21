export const fetchPeople = (people) => {
    people.map((person, index) => {
        person['index'] = index;
        return person;
    });
    return {
        type: process.env.REACT_APP_GET_PEOPLE,
        payload: people,
    };
};

export const filterPeople = (param) => {
    console.log("Hello::");
    return {
        type: process.env.REACT_APP_FILTER_PEOPLE,
        payload: {param: param},
    };
};


export const addContact = (id) => {
    return {
        type: process.env.REACT_APP_ADD_CONTACT,
        payload: {id: id},
    };
};

export const removeContact = (id) => {
    return {
        type: process.env.REACT_APP_REMOVE_CONTACT,
        payload: {id: id},
    };
};

export const addFavorite = (id) => {
    return {
        type: process.env.REACT_APP_ADD_FAVOURITE,
        payload: {id: id},
    };
};

export const removeFavorite = (id) => {
    return {
        type: process.env.REACT_APP_REMOVE_FAVOURITE,
        payload: {id: id},
    };
};
