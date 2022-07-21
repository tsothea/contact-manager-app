import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";

export default function People() {
  const state = useSelector(state => state);
  const people = state.people;
  
  return (
    <div id="content">
      <Title title="People" />
      <div className="row">
        {people.map((item, i)=>{
          return(
              <Contact data={item} index={i} />
          )
        })}
      </div>
    </div>
  );
}
