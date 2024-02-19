import { NavLink, Link, useLocation } from "react-router-dom";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineHelpCenter } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const location = useLocation();
  const isPharmacy = location.pathname.includes("/pharmacy");

  return (
    <>
      <aside>
        <ul className="sidebar">
          <li>
            <NavLink to="/dashboard" activeclassname="active">
              <IoSpeedometerOutline />
              <p className="px-2">Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to={isPharmacy ? "/pharmacy" : "/laboratory"}
              activeclassname="active"
            >
              <AiOutlineMedicineBox />
              <p className="px-2">Inventory</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/report"
              activeclassname="active"
              className="border-bottom border-dark"
            >
              <HiOutlineDocumentReport />
              <p className="px-2">Report</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeclassname="active">
              <IoSettingsOutline />
              <p className="px-2">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeclassname="active">
              <IoSettingsOutline />
              <p className="px-2">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              activeclassname="active"
              className="border-bottom border-dark"
            >
              <IoSettingsOutline />
              <p className="px-2">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeclassname="active">
              <IoSettingsOutline />
              <p className="px-2">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeclassname="active">
              <IoSettingsOutline />
              <p className="px-2">Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" activeclassname="active" className="border-bottom border-dark">
              <MdOutlineHelpCenter />
              <p className="px-2">Help/Support</p>
            </NavLink>
          </li>
          <li>
            <Link to="/logout">
              <IoIosLogOut />
              <p className="px-2">Logout</p>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
