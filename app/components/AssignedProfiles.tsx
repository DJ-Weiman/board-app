import Image from 'next/image'
import React from 'react'

type Props = {}

function AssignedProfiles({}: Props) {
  return (
    <div className="flex -space-x-2">
        <Image src='/profile.svg' alt='profile1' width={25} height={25} className='rounded-full border-1 border-white' />
        <Image src='/profile.svg' alt='profile2' width={25} height={25} className='rounded-full border-1 border-white' />
        <Image src='/profile.svg' alt='profile3' width={25} height={25} className='rounded-full border-1 border-white' />
      </div>
  )
}

export default AssignedProfiles