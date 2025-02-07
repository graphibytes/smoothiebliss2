import { NavLink } from "react-router-dom";

export function NavPane() {
  return (
    <div className="flex  justify-center">
      {/* Navigation Bar */}
      <nav className="flex justify-center bg-amber-500 lg:w-1/2 text-white p-4 rounded-b-lg">
        <ul className="flex space-x-4">
          <li className="text-xl font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative pb-2 hover:border-b-4 hover:border-white ${
                  isActive ? "border-b-4 border-white" : "border-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/todaypick"
              className={({ isActive }) =>
                `relative pb-2 hover:border-b-4 hover:border-white ${
                  isActive ? "border-b-4 border-white" : "border-transparent"
                }`
              }
            >
              Today's Pick
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative pb-2 hover:border-b-4 hover:border-white ${
                  isActive ? "border-b-4 border-white" : "border-transparent"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative pb-2 hover:border-b-4 hover:border-white ${
                  isActive ? "border-b-4 border-white" : "border-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
