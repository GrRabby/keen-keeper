
import FacebookLogo from "../assets/facebook.png";
import InstaLogo from "../assets/instagram.png";
import XLogo from "../assets/twitter.png";
import Image from "next/image";
const Footer = () => {
    return (
        <div className="bg-[#244D3F] pt-20 pb-10">
            <div className="max-w-277.5 flex flex-col items-center justify-center w-full container mx-auto text-white gap-4">
                <h2 className="text-8xl font-bold">KeenKeeper</h2>
                <p className="text-[16px] text-white/80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="flex flex-col items-center gap-4 mt-2">
                    <p className="text-[20px]">Social Links</p>
                    <div className="flex justify-center items-center gap-2">
                        <Image src={FacebookLogo} alt="Facebook" />
                        <Image src={InstaLogo} alt="Instagram" />
                        <Image src={XLogo} alt="Twitter" />
                    </div>
                </div>
                <hr className="h-px border-none w-full bg-[#1A8862]/20 mt-10"/>
                <div className="flex justify-between items-center w-full mt-5">
                    <p className="text-[#FAFAFA]/50 text-[16px]">
                        &copy; 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div className="flex justify-center items-center gap-7">
                        <p className="text-[#FAFAFA]/50 text-[16px]">
                            Privacy Policy
                        </p>
                        <p className="text-[#FAFAFA]/50 text-[16px]">
                            Terms of Service
                        </p>
                        <p className="text-[#FAFAFA]/50 text-[16px]">
                            Cookies
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;