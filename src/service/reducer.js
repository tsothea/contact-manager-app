const initialState = {
  people: [],
  listPeople: [],
  isListView: false,
  search: "",
  location: "",
  companies: [],
  isLoad: false,
};

const searchContact = (person, txtSearch) => {
  if (
    txtSearch === "" ||
    txtSearch === undefined ||
    (txtSearch !== "" &&
      (person.name.toLowerCase().includes(txtSearch) ||
        person.position.toLowerCase().includes(txtSearch) ||
        person.company.toLowerCase().includes(txtSearch)))
  ) {
    return true;
  }
  return false;
};

const searchbyLocation = (person, location) => {
  if (
    location === "" ||
    location === undefined ||
    (location !== "" && person.location.toLowerCase() === location)
  ) {
    return true;
  }
  return false;
};

const reducer = (state = initialState, action) => {
  let people = [];
  let companies = [];
  let listPeople = [];
  switch (action.type) {
    case process.env.REACT_APP_GET_PEOPLE:
      return {
        ...state,
        listPeople: action.payload,
        people: action.payload,
      };
    case process.env.REACT_APP_FILTER_PEOPLE:
      if (action.payload.param === "") {
        people = state.listPeople;
      } else {
        people = state.listPeople.filter((person) => {
          if (
            searchContact(person, action.payload.param.toLowerCase()) &&
            searchbyLocation(person, state.location.toLowerCase())
          )
            return person;
        });
      }

      return {
        ...state,
        search: action.payload.param,
        people: people,
      };
    case process.env.REACT_APP_ADD_CONTACT:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isContact"] = true;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location.toLowerCase())
        )
          return person;
      });
      return {
        ...state,
        people: people,
      };
    case process.env.REACT_APP_REMOVE_CONTACT:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isContact"] = false;
          person["isFavourite"] = false;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location.toLowerCase())
        )
          return person;
      });
      return {
        ...state,
        people: people,
      };
    case process.env.REACT_APP_ADD_FAVOURITE:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isFavourite"] = true;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location.toLowerCase())
        )
          return person;
      });
      return {
        ...state,
        people: people,
      };
    case process.env.REACT_APP_REMOVE_FAVOURITE:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isFavourite"] = false;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location.toLowerCase())
        )
          return person;
      });
      return {
        ...state,
        people: people,
      };
    case process.env.REACT_APP_GET_LOCATION:
      if (action.payload.location === "") {
        people = state.listPeople;
      } else {
        people = state.listPeople.filter((person) => {
          if (
            searchContact(person, state.search.toLowerCase()) &&
            searchbyLocation(person, state.location.toLowerCase())
          )
            return person;
        });
      }
      return {
        ...state,
        people: people,
        location: action.payload.location,
      };
    case process.env.REACT_APP_VIEW_DISPLAY:
      return {
        ...state,
        isListView: action.payload.isListView,
      };
    case process.env.REACT_APP_GET_COMPANIES:
      return {
        ...state,
        isLoad: true,
        companies: action.payload.companies,
      };
    case process.env.REACT_APP_ADD_COMPANY:
      companies = state.companies;
      companies.push(action.payload.company);
      return {
        ...state,
        companies: companies,
      };
    case process.env.REACT_APP_EDIT_COMPANY:
      return {
        ...state,
        companies: action.payload.companies,
      };
    case process.env.REACT_APP_DELETE_COMPANY:
      return {
        ...state,
        companies: action.payload.companies,
      };
    case process.env.REACT_APP_ADD_NEW_CONTACT:
      people = state.people;
      people.push(action.payload.params);
      return {
        ...state,
        //listPeople: listPeople,
        people: people,
      };
    case process.env.REACT_APP_EDIT_CONTACT:
      return {
        ...state,
        isListView: action.payload.isListView,
      };
    case process.env.REACT_APP_EDIT_CONTACT:
      return {
        ...state,
        isListView: action.payload.isListView,
      };
    default:
      return {
        ...state,
        people: [],
      };
  }
};

export default reducer;
