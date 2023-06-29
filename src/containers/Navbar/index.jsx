import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "~contexts/SidebarContext";
import { CartContext } from "~contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "~assets/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <nav className="container px-[3%] mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img className="max-w-[40px]" src={Logo} alt="" />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div
            className="
          bg-red-500 absolute -right-2 -bottom-2 
          text-[12px] w-[18px] h-[18px] text-white
          rounded-full flex justify-center items-center
          "
          >
            {itemAmount}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
