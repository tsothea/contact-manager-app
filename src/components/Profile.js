import Search from "./Search";

export default function Profile(props) {
    let name = props.name;
    let matches = name.match(/\b(\w)/g);
    let acronym = matches.join('');
    return (
        <div className="row">
            <div className="col-sm-1">
                <a href="#" className="close-icon">X</a>
            </div>
            <Search></Search>
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