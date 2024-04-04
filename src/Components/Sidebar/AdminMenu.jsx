import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem/MenuItem";

const AdminMenu = () => {
    return (
        <div>
            this is admin menu
            <MenuItem
                icon={FaUserCog}
                label='Manage Users'
                address='manage-users'
            />
        </div>
    );
};

export default AdminMenu;