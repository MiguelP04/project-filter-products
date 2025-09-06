export default function Searchbar({ filterName, query, setQuery }) {
  return (
    <div className="flex flex-col">
      <label className="ml-1 font-medium">Enter the {filterName}:</label>
      <input
        type="text"
        className="bg-zinc-200 outline-none py-1 px-2 text-sm rounded-md placeholder:text-sm"
        placeholder={`Search by ${filterName}`}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
