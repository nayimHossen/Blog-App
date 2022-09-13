import Search from "./Search";
import PopularArtical from "./PopularArtical";
import SocilePage from "./SocilePage";
import Categorys from "./Categorys";
import Tags from "./Tags";

function Home() {
  return (
    <div className="flex  max-w-7xl mx-auto px-4 md:px-12 py-5">
      <div class="w-[70%] mr-4">
        <div class="grid grid-cols-2 gap-4">
          <div className="card card-side bg-base-100 shadow-xl mb-4">
            <figure>
              <img src="https://placeimg.com/200/280/arch" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>

          <div className="card card-side bg-base-100 shadow-xl mb-4">
            <figure>
              <img src="https://placeimg.com/200/280/arch" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
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
