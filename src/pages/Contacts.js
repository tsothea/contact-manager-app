import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Contacts() {
  const state = useSelector((state) => state);
  const contacts = state.people.filter((person) => person.isContact);
  const [isListView, setListView] = useState(false);
  const getListView = (isList) => {
    setListView(isList);
  };

  return (
    <div id="content">
      <Title title="Contacts" ListView={getListView} />

      <div className="row">
        {contacts.map((item, i) => {
          return (
            <Contact
              data={item}
              index={i}
              favourite="true"
              contact="true"
              isListView={isListView}
            />
          );
        })}
      </div>
    </div>
  );
}
