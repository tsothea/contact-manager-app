export const fetchCompanies = (companies) => {
  return {
    type: process.env.REACT_APP_GET_COMPANIES,
    payload: { companies: companies },
  };
};

export const addCompany = (company) => {
  return {
    type: process.env.REACT_APP_ADD_COMPANY,
    payload: { company: company },
  };
};

export const editCompany = (company) => {
  return {
    type: process.env.REACT_APP_EDIT_COMPANY,
    payload: { company: company },
  };
};

export const deleteCompany = (id) => {
  return {
    type: process.env.REACT_APP_DELETE_COMPANY,
    payload: { id: id },
  };
};
