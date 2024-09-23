import { useEffect, useState } from "react";
import Banner from "./Banner";
import Discount from "./Discount";
import Mixer from "./Mixer";
import ShowProduct from "./ShowProduct";

function HomeContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=8");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        console.log(result.products);
        setData(result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full">
      <Banner />
      <Discount />
      <ShowProduct data={data} loading={loading} />
      <Mixer />
    </div>
  );
}

export default HomeContainer;
