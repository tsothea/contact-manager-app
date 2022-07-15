import { FIRE_BASE_URL } from "../../Config";
//import { ActionTypes } from "../../redux/constants/ActionTypes";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const ListPoeple = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchPeople = async () => {
        const response = await axios
            .get(FIRE_BASE_URL + "people.json")
            .catch((err) => {
                dispatch({
                    type: ActionTypes.PEOPLE_ERROR,
                    payload: err,
                })
                console.log("Err", err);
            });
        dispatch({
            type: ActionTypes.GET_PEOPLE,
            payload: response.data
        });
    };

    useEffect(() => {
        fetchPeople();
    });

    const RenderProfile = () => {
        let people = state.peopleReducer.people;
        let rows = [], columns = [];
        let rowIndex = 0;
        people.forEach((profile, i) => {
            // prepare the array
            columns.push(
                <Profile key={i + 1} data={profile} />
            );
            // insert new row if 4 columns
            if ((i + 1) % 4 === 0) {
                columns = [];
                rowIndex += 1;
            }
            rows[rowIndex] = columns;
        });
        return rows.map((row, rowIndex) => {
            return <div key={rowIndex} className="row">
                {row.map((column) => {
                    return column;
                })}
            </div>;
        })
    }
    return (
        <div className="row">
            <div className="col-xl-12">
                <section className="section profile">
                    {RenderProfile()}
                </section>
            </div>
        </div>
    );
}

export default ListPoeple;
