import Title from "../components/Title";
import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Company from "../components/Company";
import Modal from "react-modal";
import { addNewCompany } from "../service";

Modal.setAppElement(document.getElementById("root"));
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Companies() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formCompany, setCompanyForm] = useState();
  const state = useSelector((state) => state);
  const companies = state.companies;
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const saveCompany = (e) => {
    e.preventDefault();
    addNewCompany(formCompany, dispatch);
    setIsOpen(false);
  };

  const updateFormValue = (e) => {
    setCompanyForm({ name: e.target.value });
  };
  return (
    <div id="content">
      <Title title="Companies" />
      <div className="text-right">
        <button className="btn btn-success" onClick={openModal}>
          Add New Company
        </button>
      </div>
      <br />
      <br />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>New Company</h2>
        <form name="form-company" method="post" className="inline">
          <input
            name="name"
            className="form-control"
            onChange={updateFormValue}
          />
          <input
            type="button"
            className="btn btn-info"
            onClick={(e) => saveCompany(e)}
            value="Save"
          />
        </form>
      </Modal>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Company Email</th>
            <th>Company Phone</th>
            <th width="180">Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, i) => {
            return <Company name={item.name} index={i + 1} data={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
