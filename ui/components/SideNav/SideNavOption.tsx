import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode;
  text: string;
}

function SideNavOption({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
      {icon}
      <span className="text-base">{text}</span>
    </div>
  )
}

export default SideNavOption