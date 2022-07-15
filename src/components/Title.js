export default function Title(props) {
    return (
        <div className="header-title">
            <span className="title">{props.title}</span>
            <a href="#"><span className="fa fa-th grid active"></span></a>
            <a href="#"><span className="fa fa-bars grid"></span></a>
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