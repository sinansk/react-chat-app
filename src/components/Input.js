import Attach from "../assets/attach.png";
import Img from "../assets/img.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" onChange />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick>Send</button>
      </div>
    </div>
  );
};

export default Input;
