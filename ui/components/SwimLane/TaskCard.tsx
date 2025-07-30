import React from "react";
import {
  BsCalendarRange,
  BsLightningCharge,
  BsThreeDots,
} from "react-icons/bs";
import AssignedProfiles from "../AssignedProfiles";
import { RiLinkM } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useDraggable } from "@dnd-kit/core";

function TaskCard({
  id: taskId,
  title,
  label,
  priority,
  priorityColor,
  assignedCount,
  taskImg,
  linksCount,
  commentsCount,
  dueDate,
}: Task) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: taskId,
  });

  console.log(`Color:w-2 h-2 rounded-xs bg-[${priorityColor}]`);

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
  } : undefined;

  const priorityColorStyle = {
    backgroundColor: priorityColor,
  }



  return (
    <div ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="bg-white text-textMain p-2 flex flex-col mb-4 rounded-md"
      style={style}
    >
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-xs`} style={priorityColorStyle} />
          <p className="text-xs">{label}</p>
        </div>
        <BsThreeDots className="w-3 h-3 fill-gray-500 self-end" />
      </div>

      <p className="text-sm font-semibold mt-1 text-black">{title}</p>

      <div className="mt-2 flex gap-2">
        <AssignedProfiles size={20} count={assignedCount} />
        <div
          className={`bg-gray-100 rounded-md px-2 py-1 text-xs flex items-center gap-1`}
        >
          <BsLightningCharge className="w-2 h-2 fill-gray-800" />
          <p className="text-[8px]">{priority}</p>
        </div>
      </div>

      {taskImg && (
        <div className="bg-[#353945] rounded-md flex items-center justify-center h-22 mt-3">
          <img src={taskImg} alt="task image" width={40} height={40} />
        </div>
      )}

      <hr className="border-textMain border-0.8 mt-4 opacity-20" />

      <div className="flex mt-2 gap-3 justify-between px-2">
        {linksCount > 0 && (
          <div className="flex gap-1 items-center">
            <RiLinkM className="w-3 h-3 fill-gray-500" />
            <p className="text-xs">{linksCount}</p>
          </div>
        )}

        {commentsCount > 0 && (
          <div className="flex gap-1 items-center">
            <AiOutlineMessage className="w-3 h-3 fill-gray-500" />
            <p className="text-xs">{commentsCount}</p>
          </div>
        )}

        {dueDate && (
          <div className="flex gap-1 items-center">
            <BsCalendarRange className="w-3 h-3 fill-gray-500" />
            <p className="text-xs">Due: {(new Date(dueDate)).toDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
