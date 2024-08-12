import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLocalHospital } from "react-icons/md";

import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineHelpCenter } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Sidebar = () => {

  return (
    <>
      <aside>
        <ul className="sidebar pt-5 h-25">
          <li>
            <NavLink
              exact="true"
              to="/pharmacy"
              activeclassname="active"
            >
              <MdLocalHospital />
              <p className="px-2">Pharmacy</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/laboratory" activeclassname="active">
              <AiOutlineMedicineBox />
              <p className="px-2">Laboratory</p>
            </NavLink>
          </li>
        </ul>
        <ul className="sidebar pt-5 h-25">
          <li>
            <NavLink to="/settings" activeclassname="active">
              <IoSettingsOutline />
              <p className="px-2">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" activeclassname="active">
              <MdOutlineHelpCenter />
              <p className="px-2">Help/Support</p>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
