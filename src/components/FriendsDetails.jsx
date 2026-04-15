'use client'
import { ToastContainer, toast } from 'react-toastify';
import React, { useContext } from 'react';
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchive } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { BsChatText } from "react-icons/bs";
import { LuVideo } from "react-icons/lu";
import { TimelineContext } from '@/Context/Context';

const FriendsDetails = ({ selectedFriend }) => {
    const {setTimeline} = useContext(TimelineContext)
    const statusStyles = {
    "Overdue": 'bg-[#EF4444] text-white',
    "On-Track": 'bg-[#244D3F] text-white',
    "Almost Due": 'bg-[#EFAD44] text-white',
    };
    const handleTimelineUpdate = (selectedFriend,type) => {
        setTimeline(pre => [...pre,{
            name: selectedFriend.name,
            type : type,
            timestamp: new Date().toLocaleString(),
            timeText : new Date()
                .toLocaleString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                })
                .replace(',', ' | ')
        }]);
        toast.success(`${type} with ${selectedFriend.name} !`, {
                    position: "top-center",
        });
    };
    const badge_style = statusStyles[selectedFriend.status] || 'bg-gray-400 text-white';
    return (
        <div className="grid grid-cols-[auto_1fr] gap-6 w-full max-w-277.5 py-20">
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col justify-center items-center gap-2 bg-white rounded-lg p-6 w-full shadow-sm mb-2 max-w-87.5 flex-1'>
                    <Image src={selectedFriend.picture} alt={selectedFriend.name} width={80} height={80} className='rounded-full' />
                    <h2 className='font-semibold text-[20px]'>{selectedFriend.name}</h2>
                    
                    <span className={`text-[12px] px-2 py-1.5 rounded-[100px] ${badge_style}`}>
                        {selectedFriend.status}
                    </span>
                    <div className='flex justify-center items-center gap-2'>
                        {
                            selectedFriend.tags.map((tag,index) => {
                                return (
                                    <span key={index} className='bg-[#cbfadb] text-[12px] text-[#244D3F] px-2 py-1.5 rounded-[100px]'>
                                        {tag}
                                    </span>
                                )
                            })
                        }
                    </div>
                    <h2 className='font-medium italic text-[16px] text-[#64748B]'>{selectedFriend.bio}</h2>
                    <h2 className='text-[14px] text-[#64748B]'>Preferred : email</h2>

                </div>
                <button className='btn bg-white py-2 px-4 rounded-lg hover:bg-[#1a3b2d] hover:text-white'>
                    <HiOutlineBellSnooze />Snooze 2 weeks
                </button>
                <button className='btn bg-white py-2 px-4 rounded-lg hover:bg-[#1a3b2d] hover:text-white'>
                    <LuArchive />Archive
                </button>
                <button className='btn bg-white text-red-500 py-2 px-4 rounded-lg hover:bg-[#1a3b2d] hover:text-white'>
                    <MdOutlineDeleteForever className='text-lg'/>Delete
                </button>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full h-33.5'>
                    <h2 className='text-[#244D3F] text-[25px] font-semibold'>{selectedFriend.days_since_contact}</h2>
                    <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
                </div>
                <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full h-33.5'>
                    <h2 className='text-[#244D3F] text-[25px] font-semibold'>{selectedFriend.goal}</h2>
                    <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
                </div>
                <div className='flex flex-col p-8 justify-center items-center bg-white rounded-lg shadow-md w-full h-33.5'>
                    <h2 className='text-[#244D3F] text-[25px] font-semibold'>{selectedFriend.next_due_date}</h2>
                    <p className='text-[18px] text-[#64748B]'>Next Due</p>
                </div>

                <div className='col-span-full flex flex-col p-8 justify-center items-start bg-white rounded-lg shadow-md w-full h-33.5'>
                    <div className='flex justify-between items-center w-full'>
                        <h2 className='text-[20px] text-[#244D3F] font-medium'>Relationship Goal</h2>
                        <button className='btn btn-soft'>Edit</button>
                    </div>
                    <p className='text-[18px] text-[#64748B]'>Connect every <span className='text-black font-bold'>30 days</span></p>
                </div>

                <div className='col-span-full flex flex-col p-6 justify-center items-start bg-white rounded-lg shadow-md w-full gap-4 min-h-46.25'>
                    <p className='text-[20px] text-[#244D3F] font-medium'>Quick Check-In</p>
                    <div className='flex justify-between items-center w-full gap-4 flex-1'>
                        <button onClick={() => handleTimelineUpdate(selectedFriend,'Call')} className='flex flex-col btn btn-soft p-4 flex-1 h-full text-[18px] hover:bg-[#1a3b2d] hover:text-white rounded-xl'><LuPhoneCall />Call</button>
                        <button onClick={() => handleTimelineUpdate(selectedFriend,'Text')} className='flex flex-col btn btn-soft p-4 flex-1 h-full text-[18px] hover:bg-[#1a3b2d] hover:text-white rounded-xl'><BsChatText />Text</button>
                        <button onClick={() => handleTimelineUpdate(selectedFriend,'Video')} className='flex flex-col btn btn-soft p-4 flex-1 h-full text-[18px] hover:bg-[#1a3b2d] hover:text-white rounded-xl'><LuVideo />Video</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FriendsDetails;