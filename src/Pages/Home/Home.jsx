


import { Helmet } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import Rooms from "../../Components/Rooms/Rooms";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>
                    StayVista | Vacation Homes & Condo Rentals
                </title>
            </Helmet>
            <Categories></Categories>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;