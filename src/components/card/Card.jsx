import "./card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/list/${item.id}`} className="image-container">
        <img src={item.img} alt={`${item.title} image`} />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/list/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.png" alt="address-icon" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./bed.png" alt="" />
              <span>{item.bedroom} bedroom(s)</span>
            </div>
            <div className="feature">
              <img src="./bath.png" alt="" />
              <span>{item.bathroom} bathroom(s)</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src="./save.png" alt="" />
            </div>
            <div className="icon">
              <img src="./chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
