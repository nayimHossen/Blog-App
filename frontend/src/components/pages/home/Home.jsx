import Search from "./Search";
import PopularArtical from "./PopularArtical";
import SocilePage from "./SocilePage";
import Categorys from "./Categorys";
import Tags from "./Tags";
import HomeArtical from "./HomeArtical";

function Home() {
  return (
    <div className="md:flex max-w-7xl mx-auto pl-4 md:px-12 py-5">
      <div class="md:w-[70%] mr-4">
        <div className="md:hidden my-3">
          <Search />
        </div>
        <HomeArtical />
      </div>

      <div class="md:w-[30%] mr-4 md:m-0">
        <div className="hidden md:block">
          <Search />
        </div>
        <PopularArtical />
        <SocilePage />
        <Categorys />
        <Tags />
      </div>
    </div>
  );
}

export default Home;
