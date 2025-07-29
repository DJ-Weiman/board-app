import React from 'react'
import StatusChip from '../StatusChip'
import { FaPlus } from 'react-icons/fa6'
import { BsThreeDots } from 'react-icons/bs'
import TaskCard from './TaskCard'

type Props = {
    laneType: Status;
}

function LaneContainer({laneType}: Props) {
  return (
     <div className="flex flex-col h-full w-full bg-swimlaneBG rounded-lg">
      <div className="flex items-center justify-between bg-white h-10 px-4">
        <div className="flex items-center gap-2">
          <StatusChip type="rounded" state={laneType} />
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <FaPlus className="w-4 h-4 fill-gray-900" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <BsThreeDots className="w-5 h-5 fill-gray-900" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 min-h-screen">
        <TaskCard
          title="Sample Task"
          label="Feature"
          priority="High"
          assignedCount={2}
          dueDate="2025-07-11"
          taskImg="./placeholder.png"
          labelColor="bg-blue-400"
          priorityColor="bg-yellow-200"
          linksCount={3}
          commentsCount={5}
        />
      </div>
    </div>
  )
}

export default LaneContainer