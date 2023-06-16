import { useContext } from "react";
import { SidebarContext } from "~contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};
export default Navbar;
