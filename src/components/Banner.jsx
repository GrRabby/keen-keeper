
import { IoMdAdd } from "react-icons/io";
const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-center w-full max-w-277.5 mt-10">
            <h2 className="text-[48px] text-[#1F2937] font-bold">Friends to keep close in your life</h2>
            <p className="text-[#64748B] text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br/>
relationships that matter most.</p>
            <button className="btn bg-[#244D3F] text-white font-bold py-4 px-4 rounded flex items-center gap-0 mt-4">
                <IoMdAdd className="mr-2" />
                Add a Friend
            </button>
        </div>
    );
};

export default Banner;