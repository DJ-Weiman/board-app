import Image from "next/image";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import ProjectHeader from "./components/ProjectHeader";
import LaneContainer from "./components/SwimLane/LaneContainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-mainBG">
      <Header />
      <span className="h-px w-full bg-gray-300" />
      <div className="flex flex-1">
        
        <SideNav />
        <span className="w-px bg-gray-300" />

        <div className="flex-1 flex-col h-full">
          <ProjectHeader title="Project Title" description="This is a project description." lastUpdated="04 Apr, 2025" />
          <hr className="border-red border-0.5 mt-1" />

          <div id="swimLane" className="flex mt-2 flex-1 gap-2">
            <LaneContainer chipState="To Do" />
            <LaneContainer chipState="In Progress"/>
            <LaneContainer chipState="Approved"/>
            <LaneContainer chipState="Reject"/>
          </div>
        </div>

      </div>
    </main>
  );
}
