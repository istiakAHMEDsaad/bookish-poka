import { Helmet } from "react-helmet-async";
import Banners from "./Banners";
import Books from "./Books";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bookish Poka | Home</title>
            </Helmet>
            <Banners></Banners>
            <Books></Books>
        </div>
    );
};

export default Home;