import clsx from "clsx";

type Props = {
    state: "To Do" | "In Progress" | "Approved" | "Reject";
}

const StatusChip = ({state}: Props) => {
    
    const chipStyle = clsx(
        'text-xs font-md text-black rounded-2xl px-3 py-2 w-fit',
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