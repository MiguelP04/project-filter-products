import { useNavigate } from "react-router";

export default function ProductCard({ filtered }) {
  let navigate = useNavigate();
  return (
    <>
      {filtered.map((product) => (
        <div
          className="flex flex-col items-center w-46 h-58 bg-slate-300 rounded-md shadow-lg cursor-pointer hover:scale-105 transition"
          onClick={() => navigate(`/product/${product.id}`)}
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.title}
            className="min-h-28 w-36 mt-4 object-contain"
          />
          <div className="flex flex-col w-full h-full p-4 font-semibold">
            <span>${product.price}</span>

            <span className="text-xs font-light text-zinc-500 line-clamp-3">
              {product.title}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
