"use client";
import { TimelineContext } from "@/Context/Context";
import { useContext } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const COLORS = ["#1b5e3b", "#7c4dcc", "#3aad6e"];

export default function DonutChart() {
    const {timeline} = useContext(TimelineContext)
    const data = ["Video", "Text", "Call"].map((type, i) => ({
        type,
        count: timeline.filter(items => items.type === type).length,
        fill: COLORS[i],
        }));
    return (
        <main className="flex flex-col flex-1 items-center justify-center bg-[#F8FAFC] dark:bg-black">
            <div className="w-full max-w-277.5 mt-20 mx-auto">
                <h2 className="font-bold text-[48px] text-[#1F2937]">Friendship Analytics</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-full max-w-277.5 mb-20 mt-6 mx-auto bg-white rounded-2xl p-7">
                <div className="w-full">
                    <h2 className="font-medium text-[20px] text-[#244D3F]">By interaction type</h2>
                </div>
                <PieChart width={300} height={300}>
                    <Tooltip formatter={(v) => [v]} />
                    <Pie
                    data={data}
                    cx={150}
                    cy={150}
                    innerRadius={100}
                    outerRadius={130}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={3}
                    dataKey="count"
                    cornerRadius={8}
                    >
                    </Pie>
                </PieChart>
                <div className="flex gap-4 my-5">
                    {data.map((entry, i) => (
                        <span key={i} className="flex items-center gap-1">
                            <span style={{ width: 10, height: 10, borderRadius: 1000, background: COLORS[i] }} />
                            {entry.type}
                        </span>
                    ))}
                </div>
            </div>
        </main>
  );
}