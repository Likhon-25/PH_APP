import { FaDownload, FaRegStar } from "react-icons/fa";

const AppCard = ({ apps }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-bold text-4xl">Trending Apps</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.slice(0, 9).map((app, ind) => {
            return (
              <div key={ind} className="card bg-base-100 w-96 shadow-sm mx-auto">
                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-[300px] rounded-md mt-4"
                  />
                </figure>
                <div className="card-body text-left">
                  <h2 className="card-title">{app.title}</h2>
                  <div className="flex justify-between items-center">
                    <span className="bg-green-100 text-green-600 flex gap-1 items-center py-1 px-2 font-semibold rounded-md">
                      <FaDownload />
                      {app.downloads}
                    </span>
                    <span className="bg-orange-100 text-orange-500 flex gap-1 items-center py-1 px-1 font-semibold rounded-md">
                      <FaRegStar />
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppCard;