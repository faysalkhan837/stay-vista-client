import { BsHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem/MenuItem";
import { MdHomeWork } from "react-icons/md";


const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsHouseAddFill}
                label='Add Room'
                address='add-room'
            />
            <MenuItem
                icon={MdHomeWork}
                label='My Listiongs'
                address='my-listings'
            />
        </>
    );
};

export default HostMenu;