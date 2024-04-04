import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container";
// import { useEffect, useState } from "react";
// import Loader from "../../Components/Shared/Loader";

import Header from "./Header/Header";
import RoomInfo from "./RoomInfo/RoomInfo";
import RoomReservation from "./RoomReservation";
import { Helmet } from "react-helmet-async";


const RoomDetails = () => {
    // const [room, setRoom] = useState({});
    // const [loding, setLoding] = useState(false);
    // const { id } = useParams();
    const room = useLoaderData();

    // useEffect(() => {
    //     setLoding(true);
    //     fetch('/public/rooms.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const singleRoom = data.find(room => room._id === id)
    //             setRoom(singleRoom);
    //             setLoding(false)
    //         })
    // }, [id])
    // if (loding) return <Loader></Loader>
    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6"> <Header room={room}></Header></div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    <RoomInfo room={room}></RoomInfo>
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                        <RoomReservation room={room}></RoomReservation>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;