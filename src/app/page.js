import AllFriends from "@/components/AllFriends";
import Banner from "@/components/Banner";
import Summary from "@/components/Summary";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#F8FAFC] dark:bg-black px-10">
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl my-20"></span>}>
        <Summary></Summary>
        <AllFriends/>
      </Suspense>
    </div>
  );
}
