import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function People() {
  const state = useSelector((state) => state);
  const people = state.people;

  const [isListView, setListView] = useState(false);
  const getListView = (isList) => {
    setListView(isList);
  };

  return (
    <div id="content">
      <Title title="People" ListView={getListView} />
      <div className="row">
        {people.map((item, i) => {
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
