import Logo from "../assets/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-20">
            <div className="navbar-start">
                <Image src={Logo} alt="Logo" />
            </div>

            <div className="navbar-end gap-2">
                <button className="btn btn-soft flex items-center gap-1">
                    <FaHome className="text-xl" />
                    <span className="leading-none text-[16px]">Home</span>
                </button>
                <button className="btn btn-soft flex items-center gap-1">
                    <RiTimeLine className="text-xl"/>
                    <span className="leading-none text-[16px]">Timeline</span>
                </button>
                <button className="btn btn-soft flex items-center gap-1">
                    <ImStatsDots className="text-xl"/>
                    <span className="leading-none text-[16px]">Stats</span>
                </button>
            </div>
        </div>
    );
};

export default NavBar;