import clsx from "clsx";

type Props = {
    state: Status;
    type: "rounded" | "square";
}

const StatusChip = ({state, type}: Props) => {
    
    const chipStyle = clsx(
        'text-xs font-md text-textGray font-semibold px-2 py-1 w-fit max-h-8 truncate',
        type === "rounded" ? 'rounded-2xl px-4' : 'null',
        type === "square" ? 'rounded-md text-[8px]' : 'null',
        state === "To Do" ? 'bg-toDoGray' : null,
        state === "In Progress" ? 'bg-inProgressYellow' : null,
        state === "Approved" ? 'bg-approvedGreen' : null,
        state === "Reject" ? 'bg-rejectedRed text-white' : null
    )
  
    return (
    <div className={chipStyle}>{state}</div>
  )
}

export default StatusChip