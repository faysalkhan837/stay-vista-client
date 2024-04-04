import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem/MenuItem";


const GuestMenu = () => {
    return (
        <div>
            this is guest menu
            <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='my-bookings'
            />
        </div>
    );
};

export default GuestMenu;