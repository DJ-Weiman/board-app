type Status = "To Do" | "In Progress" | "Approved" | "Reject"

type Project = {
    id: string;
    title: string;
    description: string;
    status: Status;
    assignedUsers: AssignedProfile[];
    createdAt: string;
    updatedAt: string;
    tasks: Task[];
}

type Task = {
    id: string;
    title: string;
    description?: string;
    label: string;
    status: Status;
    priority: string;
    priorityColor?: string;
    assignedCount: number;
    taskImg?: string;
    linksCount: number;
    commentsCount: number;
    dueDate?: string;
};

type AssignedProfile = {
    id: string;
    name: string;
    avatarUrl: string;
};