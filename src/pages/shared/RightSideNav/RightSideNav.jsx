import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-5">
        <h2 className="text-2xl font-bold mb-3">Login With</h2>
        <button className="btn btn-outline w-full mb-2">
          <IoLogoGoogle className="text-2xl" />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-2xl" />
          Github
        </button>
      </div>
      {/* Find Us */}
      <div className="p-4 mb-5">
        <h2 className="text-2xl font-bold mb-3">Find Us On</h2>
        <a
          className="text-lg flex items-center border rounded-t-lg p-3"
          href=""
        >
          <FaFacebook className="mr-2" />
          <span>Facebook</span>
        </a>
        <a className="text-lg flex items-center border-x p-3" href="">
          <FaTwitter className="mr-2" />
          <span>Twitter</span>
        </a>
        <a
          target="_blank"
          className="text-lg flex items-center border rounded-b-lg p-3"
          href=""
        >
          <FaInstagram className="mr-2" />
          <span>Instagram</span>
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 mb-5 bg-gray-100">
        <h2 className="text-2xl font-bold mb-3">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img className="my-2" src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
