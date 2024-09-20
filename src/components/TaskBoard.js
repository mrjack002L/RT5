import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskBoard = ({ tasks, setTasks }) => {
  const taskBlocks = [
    { id: 'today', title: 'Today' },
    { id: 'tomorrow', title: 'Tomorrow' },
    { id: 'thisWeek', title: 'This Week' },
    { id: 'nextWeek', title: 'Next Week' },
    { id: 'unplanned', title: 'Unplanned' },
  ];

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceList = Array.from(tasks[source.droppableId]);
    const destList = source.droppableId === destination.droppableId ? sourceList : Array.from(tasks[destination.droppableId]);

    const [movedTask] = sourceList.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same list
      sourceList.splice(destination.index, 0, movedTask);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceList,
      });
    } else {
      // Moving to a different list
      destList.splice(destination.index, 0, movedTask);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destList,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="task-board">
        {taskBlocks.map((block) => (
          <Droppable key={block.id} droppableId={block.id}>
            {(provided) => (
              <div
                className="task-block"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h3>{block.title}</h3>
                {tasks[block.id].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="task-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;