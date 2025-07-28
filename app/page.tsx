import Image from "next/image";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import ProjectHeader from "./components/ProjectHeader";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <span className="h-px w-full bg-gray-300" />
      <div className="flex flex-1">
        <SideNav />
        <span className="w-px bg-gray-300" />

        <div className="flex-1 p-6 bg-mainBG">
          <ProjectHeader title="Project Title" description="This is a project description." />
        </div>
      </div>
    </main>
  );
}
