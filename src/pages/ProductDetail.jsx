import { fetchProduct } from "../services/fetchProducts";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function fetchApi() {
      try {
        const data = await fetchProduct(id);
        setResult(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, [id]);

  console.log(loading);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[100px] min-w-[100px]">
        <CircularProgress size={30} color="primary" />
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center max-h-screen w-screen overflow-hidden">
        <div className="flex justify-center items-center gap-8 h-screen w-5xl mt-16">
          <div className="flex items-center justify-center h-96 w-96 bg-zinc-200">
            <img
              src={result.image}
              alt={result.title}
              className="p-6 h-80 bg-contain"
            />
          </div>
          <div className="flex flex-col gap-6 w-96">
            <h3 className="text-2xl font-bold">{result.title}</h3>
            <h2 className="text-2xl font-bold">${result.price}</h2>
            <p className="text-zinc-500">{result.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
