"use client"
import { TimelineContext } from '@/Context/Context';
import React, { useContext } from 'react';
import CallLogo from "@/assets/call.png"
import VideoLogo from "@/assets/video.png"
import TextLogo from "@/assets/text.png"
import Image from 'next/image';
export default function TimelinePage() {
    const {timeline} = useContext(TimelineContext)
    const [filter, setFilter] = React.useState('All');
    const filteredTimeline = timeline.filter(
        item => filter === 'All' || item.type === filter
    );
    const ImageSet = {
        Call : CallLogo,
        Video : VideoLogo,
        Text : TextLogo
    }
    return (
        <main className="flex-1 bg-[#F8FAFC] dark:bg-black">
            <div className="flex flex-col items-start justify-start gap-6 w-full max-w-277.5 my-10 mx-auto">
                <h1 className="text-3xl font-bold">Timeline</h1>
                <select onChange={(e) => setFilter(e.target.value)} defaultValue="All" className="select select-m w-52">
                    <option disabled={true}>Filter timeline</option>
                    <option>All</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
                {
                    filteredTimeline.map((item,index) => {
                        return (
                            <div key={index}  className='flex justify-start items-center gap-1 w-full bg-white rounded-lg shadow-sm p-4'>
                                <Image src={ImageSet[item.type]} alt={item.type} width="40" height="40"/>
                                <div className="flex flex-col gap-2 p-4  w-full">
                                    <p className="text-[18px] text-[#64748B]"><span className='font-medium text-[20px] text-black'>{item.type}</span> with {item.name}</p>
                                    <p className="text-sm text-gray-400">{item.timestamp}</p>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </main>
    );
};