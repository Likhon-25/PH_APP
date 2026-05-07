import bannerImage from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[80vh] mx-auto items-center space-y-8 pt-[50px]">
      <h2 className="font-bold text-7xl text-center">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-gray-600 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque
        officia accusantium animi enim quasi expedita! Debitis fugiat qui
        commodi! <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, nam!
      </p>
      <div className="flex justify-center gap-2">
        <button className="btn ">Play Store</button>
        <button className="btn ">App Store</button>
      </div>
      <img src={bannerImage} alt="" className="mx-auto w-[600px] " />
    </div>
  );
};

export default Banner;
