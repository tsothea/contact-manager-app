import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";

export default function Contacts () {
    const state = useSelector(state => state);
    const contacts = state.people.filter((person) => person.isContact);

    return (
        <div id="content">
            <Title title="Contacts" />
            <div className="row">
                {contacts.map((item, i)=>{
                return(
                    <Contact data={item} index={i} />
                )
                })}
            </div>
        </div>
    )
}