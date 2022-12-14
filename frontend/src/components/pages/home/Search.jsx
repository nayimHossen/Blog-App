function Search() {
  return (
    <div className="bg-primary p-4">
      <h2 className="text-xl font-bold">Search</h2>
      <input
        type="search"
        placeholder="Search here"
        className="w-full p-2 py-2 mb-2 rounded"
      />
      <br />
      <button className="btn btn-seconday w-full">Search</button>
    </div>
  );
}

export default Search;
