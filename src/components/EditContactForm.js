import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { saveNewContact } from "../service";

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

export default function AddContactForm() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formContact, setFormContact] = useState();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const saveCompany = (e) => {
    e.preventDefault();
    saveNewContact(formContact, dispatch);
    setIsOpen(false);
  };

  const updateFormValue = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formContact };
    newFormData[fieldName] = fieldValue;
    setFormContact(newFormData);
  };

  const updateSocialFormValue = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formContact };
    if (newFormData["social_networks"] === undefined) {
      newFormData["social_networks"] = {};
    }
    newFormData["social_networks"][fieldName] = fieldValue;
    setFormContact(newFormData);
  };
  return (
    <div>
      <div className="text-right">
        <button className="btn btn-success" onClick={openModal}>
          Add New Contact
        </button>
      </div>
      <br />
      <br />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add New Contact"
      >
        <h2>Add New Contact</h2>
        <form name="form-contact" method="post" className="contact-form">
          <div className="row">
            <div className="col-sm-4">
              <label>Name: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={updateFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Company Name: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="company"
                className="form-control"
                onChange={updateFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Avatar: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="avatar"
                className="form-control"
                onChange={updateFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>City: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="city"
                className="form-control"
                onChange={updateFormValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label>Position: </label>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="position"
                className="form-control"
                onChange={updateFormValue}
              />
            </div>
          </div>
          <fieldset>
            <legend>Social Network</legend>
            <div className="row">
              <div className="col-sm-4">
                <label>Facebook: </label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="facebook"
                  className="form-control"
                  onChange={updateSocialFormValue}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <label>Instagram: </label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="instagram"
                  className="form-control"
                  onChange={updateSocialFormValue}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <label>Linkedin: </label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="linkedin"
                  className="form-control"
                  onChange={updateSocialFormValue}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <label>Skypse: </label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="skypse"
                  className="form-control"
                  onChange={updateSocialFormValue}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <label>Twitter: </label>
              </div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="twitter"
                  className="form-control"
                  onChange={updateSocialFormValue}
                />
              </div>
            </div>
          </fieldset>
          <div className="row">
            <div className="col-sm-12 text-right">
              <input
                type="button"
                className="btn btn-info"
                onClick={(e) => closeModal(e)}
                value="Cancel"
              />{" "}
              &nbsp; &nbsp;
              <input
                type="button"
                className="btn btn-info"
                onClick={(e) => saveCompany(e)}
                value="Save"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
