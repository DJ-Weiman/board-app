import Header from "@/ui/components/Header/Header";
import ProjectHeader from "@/ui/components/ProjectHeader";
import SideNav from "@/ui/components/SideNav/SideNav";
import LaneContainer from "@/ui/components/SwimLane/LaneContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-mainBG">
      <Header />
      <span className="h-px w-full bg-gray-300" />
      <div className="flex flex-1">
        
        <SideNav />
        <span className="w-px bg-gray-300" />

        <div className="flex-1 flex-col h-full">
          <ProjectHeader/>
          <hr className="border-red border-0.5 mt-1" />

          <div id="swimLane" className="flex flex-1 h-full">
            <LaneContainer laneType="To Do" />  
             <span className="w-[4px] bg-gray-300" />
            <LaneContainer laneType="In Progress"/>  
             <span className="w-[4px] bg-gray-300" />
            <LaneContainer laneType="Approved"/>  
             <span className="w-[4px] bg-gray-300" />
            <LaneContainer laneType="Reject"/>
          </div>
        </div>

      </div>
    </main>
  );
}
