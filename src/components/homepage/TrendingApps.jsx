import { useEffect, useState } from "react";
import AppCard from "../ui/AppCard";
import { ScaleLoader } from "react-spinners"; 
import { Link } from "react-router-dom"; 

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <ScaleLoader color="#9333ea" />
      </div>
    );
  }

  return (
    <div>
      <AppCard apps={apps} />
      <div className="text-center my-10">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;