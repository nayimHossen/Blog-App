import Search from "./Search";
import PopularArtical from "./PopularArtical";
import SocilePage from "./SocilePage";
import Categorys from "./Categorys";
import Tags from "./Tags";
import HomeArtical from "./HomeArtical";

function Home() {
  return (
    <div className="flex  max-w-7xl mx-auto px-4 md:px-12 py-5">
      <div class="w-[70%] mr-4">
        <HomeArtical />
      </div>

      <div class="w-[30%]">
        <Search />
        <PopularArtical />
        <SocilePage />
        <Categorys />
        <Tags />
      </div>
    </div>
  );
}

export default Home;
