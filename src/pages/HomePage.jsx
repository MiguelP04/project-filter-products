import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import Selectbar from "../components/Selectbar";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/fetchProducts";

export default function HomePage() {
  const [queryTitle, setQueryTitle] = useState("");
  const [queryPrice, setQueryPrice] = useState("");
  const [result, setResult] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [valueSelect, setValueSelect] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      try {
        setLoading(true);
        const data = await fetchAllProducts();
        setResult(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, []);

  useEffect(() => {
    let filtered = result;

    if (valueSelect != "All") {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() == valueSelect.toLowerCase()
      );
    }

    if (queryTitle) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(queryTitle.toLowerCase())
      );
    }

    if (queryPrice) {
      filtered = filtered.filter(
        (product) => product.price < parseInt(queryPrice)
      );
    }

    setFilteredProducts(filtered);
  }, [queryTitle, queryPrice, result, valueSelect]);

  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-12">
      <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-12 mb-10">
        <Searchbar
          filterName={"title"}
          query={queryTitle}
          setQuery={setQueryTitle}
        />
        <Selectbar valueSelect={valueSelect} setValueSelect={setValueSelect} />
        <Searchbar
          filterName={"max price"}
          query={queryPrice}
          setQuery={setQueryPrice}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading && (
          <>
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
            <Skeleton
              sx={{ bgcolor: "grey.400", borderRadius: "4px" }}
              variant="rectangular"
              width={180}
              height={230}
            />
          </>
        )}
        <ProductCard filtered={filteredProducts} />
      </div>
    </div>
  );
}
