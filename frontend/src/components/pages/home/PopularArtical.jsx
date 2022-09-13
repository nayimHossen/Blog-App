import { Link } from "react-router-dom";

function PopularArtical() {
  return (
    <div className="bg-primary mt-3 p-5 mb-3">
      <h2 className="text-2xl font-bold mb-2">Popular artical</h2>

      <div class="flex mb-3">
        <div className="w-[30%]">
          <Link to="#">
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-20"
              alt=""
            />
          </Link>
        </div>
        <div className="70%">
          <Link to="#" className="text-lg font-semibold hover:underline">
            The wonder full New movie is released today
          </Link>
          <br />
          <sapn className="text-sm">2 jun 2022</sapn>
        </div>
      </div>

      <div class="flex mb-3">
        <div className="w-[30%]">
          <Link to="#">
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-20"
              alt=""
            />
          </Link>
        </div>
        <div className="70%">
          <Link to="#" className="text-lg font-semibold hover:underline">
            The wonder full New movie is released today
          </Link>
          <br />
          <sapn className="text-sm">2 jun 2022</sapn>
        </div>
      </div>

      <div class="flex mb-3">
        <div className="w-[30%]">
          <Link to="#">
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-20"
              alt=""
            />
          </Link>
        </div>
        <div className="70%">
          <Link to="#" className="text-lg font-semibold hover:underline">
            The wonder full New movie is released today
          </Link>
          <br />
          <sapn className="text-sm">2 jun 2022</sapn>
        </div>
      </div>
    </div>
  );
}

export default PopularArtical;
