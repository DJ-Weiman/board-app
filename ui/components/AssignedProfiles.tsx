import Image from 'next/image'
import React from 'react'

type Props = {
  size: number;
  count: number;
}

function AssignedProfiles({ size, count }: Props) {
  const maxIcons = 3;
  const iconsToShow = Math.min(count, maxIcons);
  const excess = count - maxIcons;

  return (
    <div className="flex -space-x-2">
      {[...Array(3)].map((_, idx) => {
        return (
          <Image
            key={idx}
            src='/profile.svg'
            alt={`profile${idx + 1}`}
            width={size}
            height={size}
            className='rounded-full border-1 border-white'
          />
        )
      })}
      {count > maxIcons && (
        <div
          className="rounded-full border-1 border-white bg-gray-200 flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          <span className="text-[9px] font-semibold text-gray-700">
            +{excess}
          </span>
        </div>
      )}
    </div>
  )
}

export default AssignedProfiles