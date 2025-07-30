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

          <div id="swimLane" className="flex mt-2 flex-1 gap-2">
            <LaneContainer laneType="To Do" />
            <LaneContainer laneType="In Progress"/>
            <LaneContainer laneType="Approved"/>
            <LaneContainer laneType="Reject"/>
          </div>
        </div>

      </div>
    </main>
  );
}
