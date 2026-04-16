'use client'
import Logo from "../assets/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
    const pathname = usePathname()
    return (
        <div className="navbar bg-base-100 shadow-sm sm:flex-row justify-between px-20 flex-col gap-5">
            <div>
                <Image src={Logo} alt="Logo" />
            </div>

            <div className="flex">
                <Link href="/" className={ `${pathname === '/' ? 'text-white bg-[#244D3F]' : ''} flex items-center gap-1 p-2 rounded-md` }>
                    <FaHome className="text-xl" />
                    <span className="leading-none text-[16px]">Home</span>
                </Link>
                <Link href="/Timeline" className={ `${pathname === '/Timeline' ? 'text-white bg-[#244D3F]' : ''} flex items-center gap-1 p-2 rounded-md` }>
                    <RiTimeLine className="text-xl"/>
                    <span className="leading-none text-[16px]">Timeline</span>
                </Link>
                <Link href="/stats" className={ `${pathname === '/stats' ? 'text-white bg-[#244D3F]' : ''} flex items-center gap-1 p-2 rounded-md` }>
                    <ImStatsDots className="text-xl"/>
                    <span className="leading-none text-[16px]">Stats</span>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;