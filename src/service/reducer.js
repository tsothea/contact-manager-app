const initialState = {
    people: [],
    listPeople: [],
    isListView: false,
    search: '',
    location: ''
}

const searchContact = (person, txtSearch) => {
    if (txtSearch === '' || (txtSearch !== '' && person.name.toLowerCase().includes(txtSearch))) {
        return true;
    }
    return false;
}

const reducer = (state = initialState, action) => {
    let people = [];
    switch (action.type) {
        case process.env.REACT_APP_GET_PEOPLE:
            return {
                ...state,
                listPeople: action.payload,
                people: action.payload
            };
        case process.env.REACT_APP_FILTER_PEOPLE:
            if (action.payload.param === '') {
                people = state.listPeople;
            } else {
                people = state.listPeople.filter((person) => {
                    if (searchContact(person, action.payload.param.toLowerCase()))
                        return person;
                });
            }
            
            return {
                ...state,
                search: action.payload.param,
                people: people
            };
        case process.env.REACT_APP_ADD_CONTACT:
            people = state.listPeople.filter((person) => {
                if (person.index === action.payload.id) {
                    person['isContact'] = true;
                }
                if (searchContact(person, state.search.toLowerCase()))
                    return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_REMOVE_CONTACT:
            people = state.listPeople.filter((person) => {
                if (person.index === action.payload.id) {
                    person['isContact'] = false;
                    person['isFavourite'] = false;
                }
                if (searchContact(person, state.search.toLowerCase()))
                    return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_ADD_FAVOURITE:
            people = state.listPeople.filter((person) => {
                if (person.index === action.payload.id) {
                    person['isFavourite'] = true;
                }
                if (searchContact(person, state.search.toLowerCase()))
                    return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_REMOVE_FAVOURITE:
            people = state.listPeople.filter((person) => {
                if (person.index === action.payload.id) {
                    person['isFavourite'] = false;
                }
                if (searchContact(person, state.search.toLowerCase()))
                    return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_GET_LOCATION:
            if (action.payload.location === '') {
                people = state.listPeople;
            } else {
                people = state.listPeople.filter((person) => {
                    if (person.city === action.payload.location)
                        return person;
                });
            }
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_VIEW_DISPLAY:
            return {
                ...state,
                isListView: action.payload.isListView
            };
        default:
            return {
                ...state,
                people: []
            };
    }
}

export default reducer;