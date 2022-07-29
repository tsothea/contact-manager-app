import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
import SwitchView from "../components/hook/SwitchView";

export default function People() {
  const state = useSelector((state) => state);
  const people = state.people;

  const [isListView, getListView] = SwitchView();

  return (
    <div id="content">
      <Title title="People" isListView={isListView} ListView={getListView} />
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
