import AllFriends from "@/components/AllFriends";
import Banner from "@/components/Banner";
import Summary from "@/components/Summary";
import fs from 'fs';
import path from 'path';
export default function Home() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const allFriends = JSON.parse(jsonData);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#F8FAFC] dark:bg-black">
        <Banner></Banner>
        <Summary allFriends={allFriends}></Summary>
        <AllFriends allFriends={allFriends} />
    </div>
  );
}
