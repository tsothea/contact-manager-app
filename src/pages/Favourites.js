import Title from "../components/Title";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";

export default function Favourites() {
    const state = useSelector(state => state);
    const favourites = state.people.filter((person) => person.isFavourite);
    return (
        <div id="content">
            <Title title="Favorites" />
            <div className="row">
                {favourites.map((item, i)=>{
                return(
                    <Contact data={item} index={i} />
                )
                })}
            </div>
        </div>
    )
}