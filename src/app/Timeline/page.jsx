"use client"
import { TimelineContext } from '@/Context/Context';
import React, { use, useContext, useState } from 'react';
import CallLogo from "@/assets/call.png"
import VideoLogo from "@/assets/video.png"
import TextLogo from "@/assets/text.png"
import Image from 'next/image';
export default function TimelinePage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = React.useState('All');
    const {timeline} = useContext(TimelineContext)
    const [filteredTimeline,setfilteredTimeline] = useState(timeline)
    React.useEffect(() => {        
        let filtered = timeline.filter(item => {
            if(filter === "All"){
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.type.toLowerCase().includes(search.toLowerCase())
            }
            return (item.name.toLowerCase().includes(search.toLowerCase()) || item.type.toLowerCase().includes(search.toLowerCase())) && item.type === filter
        })
        setfilteredTimeline(filtered)
    }, [search, filter, timeline])
    const ImageSet = {
        Call : CallLogo,
        Video : VideoLogo,
        Text : TextLogo
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handlesort = (sortOrder) => {
        let sortedTimeline = [...filteredTimeline].sort((a,b) => {
            if(sortOrder === 'Newest'){
                return new Date(b.timestamp) - new Date(a.timestamp)
            }else{
                return new Date(a.timestamp) - new Date(b.timestamp)
            }
        })
        setfilteredTimeline(sortedTimeline)
    }
        
    return (
        <main className="flex-1 bg-[#F8FAFC] dark:bg-black px-10">
            <div className="flex flex-col items-start justify-start gap-6 w-full max-w-277.5 my-10 mx-auto">
                <h1 className="text-3xl font-bold">Timeline</h1>
                <div className='bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-lg shadow-sm sm:flex-row sm:justify-between'>
                    <select onChange={(e) => {
                                setFilter(e.target.value)
                            }
                        } defaultValue="All" className="select select-m w-56">
                        <option disabled={true}>Filter timeline</option>
                        <option>All</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                    <div className='flex flex-col justify-between items-center w-full gap-5 sm:flex-row'>
                        <label className="input max-w-52">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input onChange={handleSearch} type="search" required placeholder="Search Name or Type" />
                        </label>
                        <div className='flex justify-center items-center'>
                            <button className="btn bg-[#244D3F] text-white font-bold py-4 px-4 rounded flex items-center gap-0" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                                Sort by date
                            </button>

                            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                            <li onClick={() => handlesort("Newest")}><a>Newest</a></li>
                            <li onClick={() => handlesort("Oldest")}><a>Oldest</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                {
                    filteredTimeline.map((item,index) => {
                        return (
                            <div key={index}  className='flex justify-start items-center gap-1 w-full bg-white rounded-lg shadow-sm p-4'>
                                <Image src={ImageSet[item.type]} alt={item.type} width="40" height="40"/>
                                <div className="flex flex-col gap-2 p-4  w-full">
                                    <p className="text-[18px] text-[#64748B]"><span className='font-medium text-[20px] text-black'>{item.type}</span> with {item.name}</p>
                                    <p className="text-sm text-gray-400">{item.timeText}</p>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </main>
    );
};