import Socials from "./helper/Socials";
import { useDispatch } from "react-redux";
import { deleteContact, deleteFavourite, saveContact, saveFavourite } from "../service";

export default function Contact(props) {
  const dispatch = useDispatch();
  const addContact = () => {
    saveContact(props.data.index, dispatch);
  }
  const removeContact = () => {
    deleteContact(props.data.index, dispatch);
  }

  const addFavorite = () => {
    saveFavourite(props.data.index, dispatch);
  }

  const removeFavorite = () => {
    deleteFavourite(props.data.index, dispatch);
  }

  let css = "col-sm-3 border-column";
  if (props.index === 0 || props.index % 4 === 0) {
    css += " no-border";
  }
  if (props.index > 3) {
    css += " no-bottom-border";
  }
  
  return (
    <div className={css}>
      <div className="card">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <span className="thumbnail">
            <img src={props.data.avatar} alt={props.data.name} height="100" width="100" />
          </span>
          <span className="name mt-3">{props.data.name}</span>
          <span className="idd">{props.data.company}, {props.data.position}</span>
          <Socials data={props.data}></Socials>
          <div className="align-items-center">{props.data.city}</div>
          
          {props.data.isContact ? (
              <button onClick={removeContact} className="btn btn-default round-border color-border-blue active">Delete from contacts</button>
          ):(
              <button onClick={addContact} className="btn btn-default round-border color-border-blue">Add to contacts</button>
            )}
          {props.data.isFavourite &&
              <button onClick={removeFavorite} className="btn btn-default round-border color-border-blue active">Delete from favorites</button>
          }
          
          {(props.data.isContact && !props.data.isFavourite) && 
              <button onClick={addFavorite} className="btn btn-default round-border color-border-blue">Add To Favourites</button>
          }
        </div>
      </div>
    </div>
  );
}
