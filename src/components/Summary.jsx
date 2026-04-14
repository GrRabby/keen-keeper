
const Summary = ({allFriends}) => {
    const onTrack = allFriends.filter(friend => friend.status === 'On-Track').length;
    const needAttention = allFriends.filter(friend => friend.status === 'Almost Due').length;
    const interactionsThisMonth = allFriends.filter(friend => friend.days_since_contact < 30).length;
    return (
        <div className='flex justify-center items-center w-full max-w-277.5 gap-6 mt-10'>
            <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>{allFriends.length}</h2>
                <p className='text-[18px] text-[#64748B]'>Total friends</p>
            </div>
            <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>{onTrack}</h2>
                <p className='text-[18px] text-[#64748B]'>On Track</p>
            </div>
            <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>{needAttention}</h2>
                <p className='text-[18px] text-[#64748B]'>Need Attention</p>
            </div>
            <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full'>
                <h2 className='text-[#244D3F] text-[32px] font-semibold'>{interactionsThisMonth}</h2>
                <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Summary;