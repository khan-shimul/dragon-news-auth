import moment from "moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center py-5">
      <img className="mx-auto mb-3" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium mt-2">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
