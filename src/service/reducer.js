const initialState = {
    people: []
}

const reducer = (state = initialState, action) => {
    console.log("testing");
    let people = [];
    switch (action.type) {
        case process.env.REACT_APP_GET_PEOPLE:
            return {
                ...state,
                people: action.payload
            };
        case process.env.REACT_APP_FILTER_PEOPLE:
            people = state.people.map((person) => {
                if (person.name.includes(action.payload.param)) {
                    return person;
                }
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_ADD_CONTACT:
            people = state.people.map((person) => {
                if (person.index === action.payload.id) {
                    person['isContact'] = true;
                }
                return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_REMOVE_CONTACT:
            people = state.people.map((person) => {
                if (person.index === action.payload.id) {
                    person['isContact'] = false;
                    person['isFavourite'] = false;
                }
                return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_ADD_FAVOURITE:
            people = state.people.map((person) => {
                if (person.index === action.payload.id) {
                    person['isFavourite'] = true;
                }
                return person;
            });
            return {
                ...state,
                people: people
            };
        case process.env.REACT_APP_REMOVE_FAVOURITE:
            people = state.people.map((person) => {
                if (person.index === action.payload.id) {
                    person['isFavourite'] = false;
                }
                return person;
            });
            return {
                ...state,
                people: people
            };
        default:
            return {
                ...state,
                people: []
            };
    }
}

export default reducer;