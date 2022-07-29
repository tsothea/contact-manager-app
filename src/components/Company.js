import { removeCompany } from "../service";
import { useDispatch } from "react-redux";

export default function Company(props) {
  const dispatch = useDispatch();
  const editCompany = () => {
    //
  };
  const deleteCompany = () => {
    removeCompany(props.data.key, dispatch);
  };
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button className="btn btn-info" onClick={editCompany}>
          Edit
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-warning" onClick={deleteCompany}>
          Delete
        </button>
      </td>
    </tr>
  );
}
