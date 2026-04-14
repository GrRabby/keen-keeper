

import FriendsCard from './FriendsCard';

const AllFriends = ({allFriends}) => {
    return (
        <div className="flex flex-col items-start justify-start gap-4 w-full max-w-277.5 mb-10">
            <hr className="h-px border-none w-full bg-[#1A8862]/20 mt-10"/>
            <h2 className="text-[34px] text-[#1F2937] font-semibold">Your Friends</h2>
            <div className='grid grid-cols-4 gap-6 w-full'>
                {
                    allFriends.map((friend,index) => {
                        return (
                            <FriendsCard key={index} friends={friend} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;