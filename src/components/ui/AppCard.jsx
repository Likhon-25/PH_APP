import { FaDownload, FaRegStar } from "react-icons/fa";

const AppCard = ({ apps }) => {
  return (
    <div>
      <div className="container mx-auto">
        {/* // Section Header */}
        <div className="mb-8 text-center">
          <h2 className="font-bold text-4xl">Trending Apps</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatibus tempora enim expedita eaque optio, consequuntur ad
            dignissimos iusto ipsum cumque est laudantium facere omnis nisi
            facilis velit sint accusamus.
          </p>
        </div>
        Total Apps {apps.length}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, ind) => {
            return (
              <div key={ind} className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-[300px] rounded-md"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{app.title}</h2>
                  <div className="flex justify-between items-center ">
                    <span className="bg-green-100 text-green-600 flex justify-between gap-1 items-center  py-1 px-2 font-semibold rounded-md">
                      <FaDownload />
                      {app.downloads}
                    </span>
                    <span className="bg-orange-100 text-orange-500 flex justify-between gap- items-center py-1 px-1 font-semibold rounded-md">
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
