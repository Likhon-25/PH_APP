import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold ${isActive ? "text-blue-600 border-b border-blue-800" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
