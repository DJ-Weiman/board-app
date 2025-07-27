import React from 'react'
import logo from '../../public/logo.svg'
import settings from '../../public/settings.svg'
import bell from '../../public/Bell.svg'
import profile from '../../public/profile.svg'
import { FaPlus } from "react-icons/fa6";

import Image from 'next/image';
import Search from './Search';


type Props = {}

function Header({ }: Props) {
    return (
        <div className='bg-mainBG flex justify-between text-white h-20 px-6 items-center'>
            <Image src={logo.src} width={140} height={140} alt='Logo Image' />
            <div className='flex gap-6 items-center'>
                <button className='bg-blue-600 px-4 py-3 rounded-md flex items-center gap-6 text-sm line'>
                    <p className=''>Create new board</p>
                    <FaPlus width={10} height={10} />
                </button>
                <Search />
                <Image src={settings.src} width={30} height={30} alt='setttings Icon' />
                <Image src={bell.src} width={30} height={30} alt='Bell Icon' />
                <Image src={profile.src} width={30} height={30} alt='Profile Icon' />
            </div>
        </div>
    )
}

export default Header