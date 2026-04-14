import Image from "next/image";

const FriendsCard = ({friends}) => {
    const statusStyles = {
    "Overdue": 'bg-[#EF4444] text-white',
    "On-Track": 'bg-[#244D3F] text-white',
    "Almost Due": 'bg-[#EFAD44] text-white',
    };

    const badge_style = statusStyles[friends.status] || 'bg-gray-400 text-white';
    return (
        <div className='flex flex-col justify-center items-center gap-2 bg-white rounded-lg p-6 w-full shadow-sm'>
            <Image src={friends.picture} alt={friends.name} width={80} height={80} className='rounded-full' />
            <h2 className='font-semibold text-[20px]'>{friends.name}</h2>
            <p className='text-[12px] text-[#6B7280]'>{friends.days_since_contact} ago</p>
            <div className='flex justify-center items-center gap-2'>
                {
                    friends.tags.map((tag,index) => {
                        return (
                            <span key={index} className='bg-[#cbfadb] text-[12px] text-[#244D3F] px-2 py-1.5 rounded-[100px]'>
                                {tag}
                            </span>
                        )
                    })
                }
            </div>
            <span className={`text-[12px] px-2 py-1.5 rounded-[100px] ${badge_style}`}>
                {friends.status}
            </span>
        </div>
    );
};

export default FriendsCard;