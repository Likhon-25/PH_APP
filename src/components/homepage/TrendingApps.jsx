// import { useLoaderData } from "react-router";
// import { useEffect, useState } from "react";
// import AppCard from "../ui/AppCard";

// // const appsPromise = fetch("/data.json").then((res) => res.json());

// const TrendingApps = () => {
//   // const apps = use(appsPromise);
//   // console.log(apps);

//   //      const data = useLoaderData();
//   //   console.log(data, 'data from homepage');

//   const [apps, setApps] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/data.json");
//       const data = await res.json();
//       console.log(data);
//       setApps(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   console.log(apps, "APPs");
//   console.log(loading, "Loading");

//   return (
//     <div>
//       <AppCard apps={apps} />
//     </div>
//   );
// };

// export default TrendingApps;

import { useEffect, useState } from "react";
import AppCard from "../ui/AppCard";
import { ScaleLoader } from "react-spinners"; // একটি সুন্দর লোডার ইমপোর্ট করলাম

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      // তোমার রিকুয়েস্ট অনুযায়ী ঠিক ২ সেকেন্ড পর ডেটা সেট হবে
      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  // যদি loading ট্রু থাকে, তবে স্ক্রিনে শুধু লোডার দেখাবে
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <ScaleLoader color="#9333ea" />
      </div>
    );
  }

  // লোডিং শেষ হলে তোমার আগের মতোই AppCard দেখাবে
  return (
    <div>
      <AppCard apps={apps} />
    </div>
  );
};

export default TrendingApps;
