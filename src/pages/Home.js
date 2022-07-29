import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
import { useState } from "react";
import SwitchView from "../components/hook/SwitchView";

export default function Home() {
  const state = useSelector((state) => state);
  const people = state.people;

  const [isListView, getListView] = SwitchView();
  return (
    <div id="content">
      <Title title="Home" ListView={getListView} />
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
