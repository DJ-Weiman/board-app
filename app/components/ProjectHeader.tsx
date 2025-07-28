import React from 'react'
import StatusChip from './StatusChip';
import AssignedProfiles from './AssignedProfiles';

type Props = {
  title: String;
  description: String;
}

function ProjectHeader({ title, description }: Props) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center mb-4 gap-6'>
        <h2 className='text-black text-xl font-bold'>{title}</h2>
        <StatusChip state="In Progress" />
      </div>
      <p className='text-textMain'>{description}</p>

      <div className='flex gap-4'>
        <p className='text-textMain'>assigned: </p>
        <AssignedProfiles />
      </div>
    </div>
  )
}

export default ProjectHeader