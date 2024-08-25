import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popup-container">
          <img src={item.img} alt="" />
          <div className="text-container">
            <Link to={`/list/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom(s)</span>
            <b>{item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
