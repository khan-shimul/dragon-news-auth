import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">News coming soon...</h2>
        </div>
        <div className="border">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
