import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import TrendingApps from "../../components/homepage/TrendingApps";

const HomePage = () => {
    return (
        <div>
            <Banner /> 
            <TrendingApps />
            <Stats />
        </div>
    );
};

export default HomePage;