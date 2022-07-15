import db from "../realTimeData";
import {useState} from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Title from "../components/Title";

export default function People() {
  const [people , setPeople] = useState([]);
  
  let columns = [];
  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
    collection(db, "people").get().then((querySnapshot) => {
         
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            console.log(data);
            setPeople(arr => [...arr , data]);
              
        });
    })
}
//Fetchdata();
  
  for (var i = 1; i <= 8; i++) {
    let css = 'col-sm-3 border-column';
    if ((i % 4) === 1) {
        css += ' no-border';
    }
    if (i > 4) {
        css += ' no-bottom-border';
    }
        
    columns.push(
      <div className={css}>
        <div className="card">
          <div className="image d-flex flex-column justify-content-center align-items-center">
            <span className="thumbnail">
              <img
                src="https://i.imgur.com/wvxPV9S.png"
                height="100"
                width="100"
              />
            </span>
            <span className="name mt-3">Eleanor Pena</span>
            <span className="idd">Logical Solution, CEO</span>
            <div className="align-items-center">
              <span className="social-icon">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </span>
              <span className="social-icon">
                <a href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </span>
              <span className="social-icon">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </span>
              <span className="social-icon">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </span>
            </div>
            <div className="align-items-center">Ukraine, Lviv</div>
            <a href="#" className="btn btn-default round-border color-border-blue">
              Add To Contacts
            </a>
            <a href="#" className="btn btn-default round-border color-border-blue hidden">
              Add To Favourites
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div id="content">
      <Title title="People" />

      <div className="row">{columns}</div>
    </div>
  );
}
