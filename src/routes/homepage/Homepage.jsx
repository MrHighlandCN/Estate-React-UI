import "./homepage.scss";
import Searchbar from "../../components/searchbar/Searchbar";

function Homepage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>

          <Searchbar />

          <div className="boxs">
            <div className="box">
              <h2>16+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="box">
              <h2>200</h2>
              <p>Adward Gained</p>
            </div>
            <div className="box">
              <h2>2000+</h2>
              <p>Property Ready</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="homepage-background-image" />
      </div>
    </div>
  );
}
export default Homepage;
