import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 px-3 py-2 rounded-md">
      <button className="btn btn-secondary mr-1">Breaking News</button>
      <Marquee pauseOnHover={true} speed={80}>
        <Link className="mr-5" to={"/"}>
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-5" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-5" to={"/"}>
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
