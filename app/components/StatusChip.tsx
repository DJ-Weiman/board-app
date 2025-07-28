import clsx from "clsx";

type Props = {
    state: "To Do" | "In Progress" | "Approved" | "Reject";
    type: "rounded" | "square";
}

const StatusChip = ({state, type}: Props) => {
    
    const chipStyle = clsx(
        'text-xs font-md text-black px-2 py-1 w-fit',
        type === "rounded" ? 'rounded-2xl' : 'null',
        type === "square" ? 'rounded-md' : 'null',
        state === "To Do" ? 'bg-gray-200' : null,
        state === "In Progress" ? 'bg-yellow-500' : null,
        state === "Approved" ? 'bg-red-600' : null,
        state === "Reject" ? 'invisible' : null
    )
  
    return (
    <div className={chipStyle}>{state}</div>
  )
}

export default StatusChip