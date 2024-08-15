import rdr2 from "../images/rdr2.jpg";
import tlou from "../images/tlou.jpg";
import forza from "../images/forza.jpg";

export function ImagesPage() {
  return (
    <div>
      <h2>Images</h2>
      <img
        className="images"
        src={rdr2}
        alt="Red Dead Redemption 2"
        title="Red Dead Redemption 2"
      />
      <img
        className="images"
        src={tlou}
        alt="The Last Of US Part 1"
        title="The Last Of US Part 1"
      />
      <img
        className="images"
        src={forza}
        alt="Forza Horizon"
        title="Forza Horizon"
      />
    </div>
  );
}
