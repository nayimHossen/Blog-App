import { Link } from "react-router-dom";

function Tags() {
  return (
    <div className="p-4 bg-stone-300">
      <h2 className="text-xl font-bold mb-2">Tags</h2>
      <ul className="flex flex-wrap gap-2">
        <li className="p-2 bg-[green] text-white rounded hover:underline">
          <Link to="#">Computer</Link>
        </li>
        <li className="p-2 bg-[green] text-white rounded hover:underline">
          <Link to="#">Teaching</Link>
        </li>
        <li className="p-2 bg-[green] text-white rounded hover:underline">
          <Link to="#">Mern stack</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tags;
