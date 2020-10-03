import React from 'react';
import { Checkbox } from './checkbox';
import { useTasks } from '../hooks';

export const Tasks = () => {
    const { tasks } = useTasks('1');   // pull in custom tasks hook, use "1" for testing

    console.log(tasks);

    let projectName = '';

    

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};



