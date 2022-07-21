import { filterPeople } from "../service/actions";
import { useDispatch } from "react-redux";

export default function Profile(props) {
    const dispatch = useDispatch();
    const doSearch = (event) => {
        console.log(event.target.value);
        dispatch(filterPeople(event.target.value));
    }
    let name = props.name;
    let matches = name.match(/\b(\w)/g);
    let acronym = matches.join('');
    return (
        <div className="row">
            <div className="col-sm-1">
                <a href="#" className="close-icon">X</a>
            </div>
            <div className="col-sm-6">
                <form method="post" name="form-search" id="frm-search-id" className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Search..." onKeyUp={doSearch} />
                </form>
            </div>
            <div className='col-sm-5'>
                <div className='profile'>
                    <div className='inline'>
                        Welcome<br/>
                        <span className='circle'>{acronym}</span> {name}
                    </div>
                    <div className='inline'>
                        <img src={props.photo} alt='Profile' width={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

