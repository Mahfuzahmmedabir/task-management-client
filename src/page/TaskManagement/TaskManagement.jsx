import React, { useEffect, useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const getSavedTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks
    ? JSON.parse(savedTasks)
    : [
        { id: '1', content: '📌 Task One0000000' },
        { id: '2', content: '📌 Task Two' },
        { id: '3', content: '📌 Task Three' },
      ];
};

const TaskManagement = () => {
  const [tasks, setTasks] = useState(getSavedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Handle drag event
  const handleDragEnd = result => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-center mb-4">📝 Task List</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 bg-white rounded shadow flex items-center justify-between"
                    >
                      {task.content}
                      <span className="text-gray-400 cursor-pointer">↕️</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskManagement;
