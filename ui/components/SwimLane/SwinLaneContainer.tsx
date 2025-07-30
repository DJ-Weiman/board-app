'use client'

import React from 'react'
import LaneContainer from './LaneContainer'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import useProjectStore from '@/lib/projectSore'

type Props = {}

function SwinLaneContainer({ }: Props) {
    const { changeTaskStatus } = useProjectStore();

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as Status;

        changeTaskStatus(taskId, newStatus);
    }

    return (
        <div>
            <div id="swimLane" className="flex flex-1 h-full">
                <DndContext onDragEnd={handleDragEnd}>
                    <LaneContainer laneType="To Do" />
                    <span className="w-[4px] bg-gray-300" />
                    <LaneContainer laneType="In Progress" />
                    <span className="w-[4px] bg-gray-300" />
                    <LaneContainer laneType="Approved" />
                    <span className="w-[4px] bg-gray-300" />
                    <LaneContainer laneType="Reject" />
                </DndContext>
            </div>
        </div>
    )
}

export default SwinLaneContainer