import ContactForm from "../components/ContactForm";

export default function AddContact(props) {
  return (
    <div id="content">
      <h2>Add new contact</h2>
      <div className="row">
        <ContactForm />
      </div>
    </div>
  );
}
