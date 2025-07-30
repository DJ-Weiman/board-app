import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa6";


import { TbMessageDots } from 'react-icons/tb';
import { LuUserRound } from 'react-icons/lu';
import { BsCalendarMinus, BsCalendarRange } from 'react-icons/bs';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import SideNavOption from './SideNavOption';


type Props = {}

const SideNav = (props: Props) => {
    return (
        <div className='min-h-screen bg-mainBG px-6 pt-6 text-textMain flex flex-col justify-between'>

            <div>
                <div className="border border-gray-300 rounded-md flex gap-10 items-center px-4 py-2">
                    <div className='flex items-center gap-3'>
                        <img src="/profile.svg" alt="Profile" className="w-10 h-10" />
                        <div>
                            <p className="font-light text-gray-400">workspace</p>
                            <p className="text-md">Root folder</p>
                        </div>
                    </div>
                    <RiArrowDropDownLine />
                </div>

                <div className='flex flex-col gap-4 mt-6'>
                    <SideNavOption
                        icon={<RxDashboard className="w-6 h-6" />}
                        text="Dashboard" />
                    <SideNavOption
                        icon={<FaRegFolder className="w-6 h-6" />}
                        text="Boards" />
                    <SideNavOption
                        icon={<TbMessageDots className="w-6 h-6" />}
                        text="Messages" />
                    <SideNavOption
                        icon={<BsCalendarRange className="w-6 h-6" />}
                        text="Calender" />
                    <SideNavOption
                        icon={<LuUserRound className="w-6 h-6" />}
                        text="Team members" />
                </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <SideNavOption
                    icon={<IoIosInformationCircleOutline className="w-6 h-6" />}
                    text="Support"
                />
                <div className='bg-gray-800 text-gray-200 rounded-md'>
                    <SideNavOption
                        icon={<BiLogOut className="w-6 h-6" />}
                        text="Logout"
                    />
                </div>
            </div>

        </div>
    )
}

export default SideNav