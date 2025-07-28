import React from 'react'
import { BsCalendarRange, BsLightningCharge, BsThreeDots } from 'react-icons/bs'
import AssignedProfiles from '../AssignedProfiles'
import { RiLinkM } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'

type Props = {

}

function TaskCard({ }: Props) {
    return (
        <div className='bg-white text-textMain p-2 flex flex-col'>
            <div className='flex items-center gap-2 justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-xs bg-red-400' />
                    <p className='text-xs'>Research</p>
                </div>
                <BsThreeDots className="w-3 h-3 fill-gray-500 self-end" />
            </div>

            <p className='text-sm font-semibold mt-1 text-black'>Task Title</p>

            <div className='mt-2 flex gap-2'>
                <AssignedProfiles size={20} count={5} />
                <div className='bg-gray-100 rounded-md px-2 py-1 text-xs flex items-center gap-1'>
                    <BsLightningCharge className='w-2 h-2 fill-gray-800' />
                    <p className='text-[8px]'>High</p>
                </div>
            </div>

            <div className='bg-[#353945] rounded-md flex items-center justify-center h-22 mt-3'>
                <img src='/profile.svg' alt='profile' width={40} height={40} />
            </div>

            <hr className='border-textMain border-0.8 mt-4 opacity-20' />

            <div className='flex mt-2 gap-3 justify-between px-2'>
                <div className='flex gap-1 items-center'>
                    <RiLinkM className='w-3 h-3 fill-gray-500' />
                    <p className='text-xs'>2</p>
                </div>

                <div className='flex gap-1 items-center'>
                    <AiOutlineMessage className='w-3 h-3 fill-gray-500' />
                    <p className='text-xs'>2</p>
                </div>

                <div className='flex gap-1 items-center'>
                    <BsCalendarRange  className='w-3 h-3 fill-gray-500' />
                    <p className='text-xs'>Due: {"22 April 2024"}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskCard