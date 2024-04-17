import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ShowCard from "../ShowCard/ShowCard";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Real Estate | home</title>
            </Helmet>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <ShowCard></ShowCard>
        </div>
    );
};

export default Home;