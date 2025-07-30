'use client';

import React, { use } from "react";
import StatusChip from "./StatusChip";
import AssignedProfiles from "./AssignedProfiles";
import { FaPen } from "react-icons/fa6";
import { LuPen } from "react-icons/lu";
import useProjectStore from "@/lib/projectSore";

function ProjectHeader() {
  const { data: projectData} = useProjectStore();
  const { title, description, assignedUsers, updatedAt } = projectData;

  return (
    <div className="flex flex-col gap-3 text-textMain p-6">
      <div className="flex items-center mb-4 gap-6">
        <h2 className="text-black text-xl font-bold">{title}</h2>
        <StatusChip type="square" state="In Progress" />
      </div>
      <p>{description}</p>

      <div className="flex gap-4 items-center">
        <p>assigned: </p>
        <AssignedProfiles size={25} count={assignedUsers.length}/>
        <button className="flex items-center gap-2 px-3 py-1 rounded-full border-textMain border-1 text-textMain transition">
          <span className="text-sm">Manage</span>
          <LuPen className="w-4 h-4" />
        </button>
      </div>

      <hr className="border-textMain border-0.4 mt-4 opacity-20" />

      <p className="text-sm mt-1">Last updated on: {updatedAt}</p>
    </div>
  );
}

export default ProjectHeader;
