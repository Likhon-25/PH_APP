import logoImg from "../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";
const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installApps",
      text: "Installation",
    },
  ];
  return (
    <nav className=" bg-white shadow ">
      <div className="flex justify-between gap-4 items-center py-[8px] container mx-auto">
        <img src={logoImg} alt="" className="max-w-[50px]" />
        <ul className="flex justify-between gap-3 items-center">
          {navItems.map((item) => (
            <MyNavLink to={item.path}>{item.text}</MyNavLink>
          ))}
          {/* <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn btn-active btn-primary">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
