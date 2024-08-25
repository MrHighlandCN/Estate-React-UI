import "./listpage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function Listpage() {
  const data = listData;
  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items={data} />
      </div>
    </div>
  );
}
export default Listpage;
