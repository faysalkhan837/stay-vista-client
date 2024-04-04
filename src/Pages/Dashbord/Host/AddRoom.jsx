import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import UseAuth from "../../../Hooks/UseAuth";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const AddRoom = () => {
    const navigate = useNavigate();
    const { user } = UseAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('upload Image')

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })
    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        const form = e.target
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];

        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const image_url = await imageUpload(image)

        // make an object for all data....
        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            bathrooms,
            bedrooms,
            description,
            host,
            image: image_url?.data?.display_url
        }

        try {
            const data = await addRoom(roomData)
            console.log(data)
            setUploadButtonText('uploaded')
            toast.success('Room Added')
            navigate('/dashbord/my-listings')
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
        console.log(roomData)
    }
    // handle Date change from react-date-range calender;
    const handleDates = ranges => {
        console.log(ranges)
        setDates(ranges.selection)
    }
    // handle image bullton text.....
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }
    return (
        <div>
            <Helmet>
                <title>Add Room | Dashbord</title>
            </Helmet>
            <AddRoomForm handleSubmit={handleSubmit}
                handleDates={handleDates}
                dates={dates}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;