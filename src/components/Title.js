import { useState } from "react";

export default function Title(props) {
    const [displayGride, setDisplayGride] = useState('active');
    const [displayList, setDisplayList] = useState('');

    const changeDisplay = (e, isGride) => {
        e.preventDefault();
        if (isGride) {
            setDisplayGride('active');
            setDisplayList('');
        } else {
            setDisplayGride('');
            setDisplayList('active');
        }
    }

    return (
        <div className="header-title">
            <span className="title">{props.title}</span>
            <a href="#" onClick={(e) => changeDisplay(e, true)}><span className={"fa fa-th grid " + displayGride}></span></a>
            <a href="#" onClick={(e) => changeDisplay(e, false)}><span className={"fa fa-bars grid " + displayList}></span></a>
            <span className="text-right">
            <span className="fa fa-map-marker icon-map"></span>
            <select className="location-opt">
                <option value={0}>Ukrain, Lviv</option>
                <option value={0}>Ukrain, Lviv</option>
                <option value={0}>Ukrain, Lviv</option>
                <option value={0}>Ukrain, Lviv</option>
                <option value={0}>Ukrain, Lviv</option>
            </select>
            </span>
        </div>
    )
}