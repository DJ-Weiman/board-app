import clsx from "clsx";

type Props = {
    state: StatusChipState;
    type: "rounded" | "square";
}

const StatusChip = ({state, type}: Props) => {
    
    const chipStyle = clsx(
        'text-xs font-md text-black px-2 py-1 w-fit',
        type === "rounded" ? 'rounded-2xl px-4' : 'null',
        type === "square" ? 'rounded-md' : 'null',
        state === "To Do" ? 'bg-gray-200' : null,
        state === "In Progress" ? 'bg-yellow-500' : null,
        state === "Approved" ? 'bg-green-600' : null,
        state === "Reject" ? 'bg-red-600 text-gray-200' : null
    )
  
    return (
    <div className={chipStyle}>{state}</div>
  )
}

export default StatusChip