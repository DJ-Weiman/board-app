'use client';

import React from 'react'
import StatusChip from '../StatusChip'
import { FaPlus } from 'react-icons/fa6'
import { BsThreeDots } from 'react-icons/bs'
import TaskCard from './TaskCard'
import useProjectStore from '@/lib/store'

type Props = {
    laneType: Status;
}

function LaneContainer({laneType}: Props) {
  const { changeTaskStatus, getTasksByStatus} = useProjectStore()
  const tasks = getTasksByStatus(laneType);

  tasks.forEach(task => {
    console.log(`Task ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
  });

  const handleChangeTask = () => {
    changeTaskStatus("task-002", 'Approved')
  }

  return (
     <div className="flex flex-col h-full w-full bg-swimlaneBG rounded-lg">
      <div className="flex items-center justify-between bg-white h-10 px-4">
        <div className="flex items-center gap-2">
          <StatusChip type="rounded" state={laneType} />
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1 rounded-full hover:bg-gray-100" onClick={handleChangeTask}>
            <FaPlus className="w-4 h-4 fill-gray-900" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <BsThreeDots className="w-5 h-5 fill-gray-900" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 min-h-screen">
        {tasks.map((task) => 
            <TaskCard key={task.id} {...task} />
        )}
      </div>
    </div>
  )
}

export default LaneContainer