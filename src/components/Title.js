import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterLocation } from "../service/actions";

const Title = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [displayGride, setDisplayGride] = useState("active");
  const [displayList, setDisplayList] = useState("");
  const locations = [...new Set(state.listPeople.map((person) => person.city))];

  const changeDisplay = (e, isGride) => {
    e.preventDefault();
    props.ListView(isGride);
    if (isGride) {
      setDisplayGride("");
      setDisplayList("active");
    } else {
      setDisplayGride("active");
      setDisplayList("");
    }
  };

  return (
    <div className="header-title">
      <span className="title">{props.title}</span>
      <a href="#" onClick={(e) => changeDisplay(e, false)}>
        <span className={"fa fa-th grid " + displayGride}></span>
      </a>
      <a href="#" onClick={(e) => changeDisplay(e, true)}>
        <span className={"fa fa-bars grid " + displayList}></span>
      </a>
      <span className="text-right">
        <span className="fa fa-map-marker icon-map"></span>
        <select
          className="location-opt"
          name="location"
          onChange={(e) => dispatch(filterLocation(e.target.value))}
        >
          <option value="">All</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  people: state.people,
  location: "",
});

export default connect(mapStateToProps, { filterLocation })(Title);
