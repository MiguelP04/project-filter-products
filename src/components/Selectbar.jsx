export default function Selectbar({ valueSelect, setValueSelect }) {
  return (
    <div>
      <label className="ml-1 font-medium">Search by category:</label>
      <select
        value={valueSelect}
        onChange={(e) => setValueSelect(e.target.value)}
        className="w-full py-1 px-2 bg-zinc-200 outline-none text-sm rounded-md placeholder:text-sm"
      >
        <option value="All">All</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
}
